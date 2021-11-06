const CATEGORY = {
    FOOD: 0,
    UTILITIES: 1,
    ENTERTAINMENT: 2,
    CUSTOM: 3,
}

class Budget {
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

function getStartDate(period) {
    var today = new Date();
    switch (period) {
        case PERIOD.DAY: {
            var start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
            return start;
        }
        case PERIOD.WEEK: {
            var sunday = today.getDate() - today.getDay();
            var start = new Date(today.getFullYear(), today.getMonth(), sunday);
            return start;
        }
        case PERIOD.MONTH: {
            var start = new Date(today.getFullYear(), today.getMonth(), 1);
            return start;
        }
    }
}

function timeTypeTotal(type, period) {
    var totalSpent = 0;
    var start = getStartDate(period);
    expenses.forEach(data => {
        var date = new Date(data.time);
        if(date >= start && data.type == type) {
            totalSpent += data.value;
        }
    })
    return totalSpent;
}

function timeTotal(period) {
    var totalSpent = 0;
    var start = getStartDate(period);
    expenses.forEach(data => {
        var date = new Date(data.time);
        if(date >= start) {
            totalSpent += data.value;
        }
    })
    return totalSpent;
}