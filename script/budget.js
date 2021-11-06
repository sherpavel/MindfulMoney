const Category = {
    FOOD: 0,
    UTILITIES: 1,
    ENTERTAINMENT: 2,
    CUSTOM: 3,
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
    for(e in expenses) {
        totalSpent += e.value;
    }
    return totalSpent;
}

function typeTotal(type) {
    var totalSpent = 0;
    for(e in expenses) {
        if(e.type == type) {
            totalSpent += e.value;
        }
    }
    return totalSpent;
}

function timeTotal(start, stop) {
    var totalSpent = 0;
    for(e in expenses) {
        if(e.time >= start && e.time <= stop) {
            totalSpent += e.value;
        }
    }
    return totalSpent;
}