// @ts-nocheck
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
    expenses: [
        {
            item: "Eg0",
            amt: 10,
            cost: 2.0,
            del: false,
        },
        {
            item: "Eg1",
            amt: 10,
            cost: 2.0,
            del: false,
        },
        {
            item: "Eg2",
            amt: 10,
            cost: 2.0,
            del: false,
        },
        {
            item: "Eg3",
            amt: 10,
            cost: 2.0,
            del: false,
        },
        {
            item: "Eg4",
            amt: 10,
            cost: 2.0,
            del: false,
        },
        {
            item: "Eg5",
            amt: 10,
            cost: 2.0,
            del: false,
        },
    ],

    totalAmt() {
        let amt = 0.0;
        this.expenses.forEach((exp) => {
            amt += exp["cost"] * exp["amt"];
        });
        return amt.toFixed(2);
    },

    addExpense() {
        let name = document.getElementById("new-item"),
            amount = document.getElementById("new-quantity"),
            unit_cost = document.getElementById("new-cost");

        if (!name.value) {
            alert("Please enter an item name.");
        } else {
            this.expenses.push({
                item: name.value,
                amt: parseInt(amount.value) || 0,
                cost: parseFloat(unit_cost.value) || 0.0,
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
