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
            item: "Expense 1",
            amt: 1,
            cost: 2.0,
            del: false,
        },
        {
            item: "Expense 2",
            amt: 3,
            cost: 4.0,
            del: false,
        },
        {
            item: "Expense 3",
            amt: 5,
            cost: 6.0,
            del: false,
        },
        {
            item: "Expense 4",
            amt: 7,
            cost: 8.0,
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
        this.expenses.push({
            item: document.getElementById("new-item").value,
            amt: parseInt(document.getElementById("new-quantity").value),
            cost: parseFloat(document.getElementById("new-cost").value),
        });
    },

    delExpense() {
        this.expenses.forEach((expense) => {
            if (expense.del === true) {
                this.expenses.splice(this.expenses.indexOf(expense), 1);
            }
        });
    },
};
