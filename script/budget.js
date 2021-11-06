const Category = {
    FOOD: 0,
    UTILITIES: 1,
    ENTERTAINMENT: 2,
    CUSTOM: 3,
}

class AmountData {
    constructor() {
        this.data = [];
    }

    add(value) {
        this.data[Date.now()] = value;
    }

    total() {
        
    }

    weeklyTotal() {

    }

    monthlyTotal() {
        
    }
}

class Food {
    constructor() {
        this.amountData = new AmountData();
        this.budget = 0;
        this.category = Category.FOOD;
    }
}