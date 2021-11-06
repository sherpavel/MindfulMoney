const Category = {
    FOOD: 0,
    UTILITIES: 1,
    ENTERTAINMENT: 2,
    CUSTOM: 3,
}

class MonthlyBudget {
    constructor(food, utilities, entertainment, custom) {
        this.food = food;
        this.utilities = utilities;
        this.entertainment = entertainment;
        this.custom = custom;
    }

    budgetTotal() {
        return this.food + this.utilities + this.entertainment + this.custom;
    }
}

class Expense {
    constructor(time, value, type, name) {
        this.time = time;
        this.value = value;
        this.type = type;
        this.name = name;
    }
}

let expenses = [];

function add(time, value, type, name) {
    expenses.push(new Expense(time, value, type, name));
}

function total() {
    var totalSpent = 0;
    expenses.forEach(data => {
        totalSpent += data.value;
    })
    return totalSpent;
}

function typeTotal(type) {
    var totalSpent = 0;
    expenses.forEach(data => {
        if(data.type == type) {
            totalSpent += data.value;
        }
    })
    return totalSpent;
}

function monthlyTypeTotal(type) {
    var date = new Date();
    var month = date.getMonth();
    var totalSpent = 0;
    expenses.forEach(data => {
        var d = new Date(data.time);
        if(d.getMonth() == month && data.type == type) {
            totalSpent += data.value;
        }
    })
    return totalSpent;
}

function monthlyTotal() {
    var date = new Date();
    var month = date.getMonth();
    var totalSpent = 0;
    expenses.forEach(data => {
        var d = new Date(data.time);
        if(d.getMonth() == month) {
            totalSpent += data.value;
        }
    })
    return totalSpent;
}