const Category = {
    FOOD: 0,
    UTILITIES: 1,
    ENTERTAINMENT: 2,
    CUSTOM: 3,
}

class Expense {
    constructor(time, value, type) {
        this.time = time;
        this.value = value;
        this.type = type;
    }
}
let expenses = [];

function add(time, value, type) {
    expenses.push(new Expense(time, value, type));
}

function total() {
        
}

function weeklyTotal() {

}

function monthlyTotal() {
    
}