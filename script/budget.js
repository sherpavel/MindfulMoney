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

const Food = {
    amountData: new AmountData,
    budget: 0,
    category: Category.FOOD,
}