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
        
}

function weeklyTotal() {

}

function monthlyTotal() {
    
}