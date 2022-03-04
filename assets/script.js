// @ts-nocheck
const $ = (id) => document.getElementById(id);

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
    expenses: [],

    totalAmt() {
        let amt = 0.0;
        this.expenses.forEach((exp) => (amt += exp.cost * exp.amt));
        return amt.toFixed(2);
    },

    addExpense() {
        let name = $("new-item"),
            amount = $("new-quantity"),
            unit_cost = $("new-cost");

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
    },

    delExpense() {
        this.expenses.forEach((expense) => {
            if (expense.del) {
                this.expenses.splice(this.expenses.indexOf(expense), 1);
            }
        });
    },
};
