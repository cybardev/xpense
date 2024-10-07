// @ts-nocheck
const $ = (id) => document.querySelector(id);

let themeData = {
    logoSrc: "./assets/x-pense-logo.svg",
    theme: "lightMode",
    themeIcon: "🌙",
    themeToggle() {
        if (this.theme === "lightMode") {
            this.theme = "darkMode";
            this.themeIcon = "☀️";
            this.logoSrc = "./assets/x-pense-logo-dark.svg";
        } else {
            this.theme = "lightMode";
            this.themeIcon = "🌙";
            this.logoSrc = "./assets/x-pense-logo.svg";
        }
    },
};

let staticData = {
    canSave: storageAvailable("localStorage"),
    expenses: getSavedExpenses(),

    totalAmt() {
        let amt = 0.0;
        this.expenses.forEach((exp) => (amt += exp.cost * exp.amt));
        return amt.toFixed(2);
    },

    addExpense() {
        let name = $("#new-item"),
            amount = $("#new-quantity"),
            unit_cost = $("#new-cost");

        if (!name.value) {
            alert("Please enter an item name.");
        } else {
            this.expenses.push({
                item: name.value,
                amt: parseInt(amount.value) || 0,
                cost: parseFloat(unit_cost.value) || 0.0,
                del: false,
            });

            name.value = "";
            amount.value = "";
            unit_cost.value = "";
        }

        // save to localStorage
        saveIfPossible(this.canSave, "expenses", this.expenses);
    },

    delExpense() {
        this.expenses.forEach((expense) => {
            if (expense.del) {
                this.expenses.splice(this.expenses.indexOf(expense), 1);
            }
        });

        // update in localStorage
        saveIfPossible(this.canSave, "expenses", this.expenses);
    },
};

function saveIfPossible(canSave, key, value) {
    if (canSave) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}

function getSavedExpenses() {
    if (storageAvailable("localStorage")) {
        let expenses = localStorage.getItem("expenses");
        if (expenses !== null) {
            return JSON.parse(expenses);
        }
    }
    return [];
}
