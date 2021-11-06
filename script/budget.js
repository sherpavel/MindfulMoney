import {PERIOD} from "./main";

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

export function typeTotal(type) {
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

function calculateReport (period) {
    var arraySpending = [timeTypeTotal(CATEGORY.FOOD, period), timeTypeTotal(CATEGORY.UTILITIES, period), timeTypeTotal(CATEGORY.ENTERTAINMENT, period), timeTypeTotal(CATEGORY.CUSTOM, period)];
    var totalSpent = total();
    var average = totalSpent/4;
    return totalSpent, Math.min.apply(Math, arraySpending), Math.max.apply(Math, arraySpending), average;
}

function userGuessAmount (totalSpent,maxCategory, minCategory, average, budget){
    var userGuess = prompt("Guess how much you spent this month!") // this will implement some sort of get user input, can take it out if needed
    if (userGuess == totalSpent){ // user guesses the amount they spent correctly
        print("Congratulations! You've guessed correctly. Here is a summary of all the money you spent so far.")
    } else {// user doesn't guess correctly, show the actual amount
        if(totalSpent = budget.budgetTotal()){  //if they spent just enough
            print("You actually spent this much: " + totalSpent)

        }
        else if(totalSpent > budget.budgetTotal()){ // if they spent over their budget
            print("Yikes! You went over budget. Try watching your spending in this category: " + maxCategory)
        }
        else{ // if they spent less than their budget
            print("Yay! You've spent less than expected. Treat yourself!")
        }
    }// summary statistics below
    print("You spent the most in this category " + maxCategory + "Try spending less in this category!")
    print("You spent the least in this category "+ minCategory)
    print("Here is the average amount spent so far. " + average)
}