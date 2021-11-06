let isMobile = false;

window.onresize = () => {
    isMobile = document.body.clientWidth < 700;
}

window.onload = () => {
    isMobile = document.body.clientWidth < 700;
    main();
}

const EXPENSES_TYPE = {
    FOOD: 0,
    UTILITY: 1,
    ENT: 2,
    CUSTOM: 3,
}

function main() {
    let testArray = {

    };


    let f = Food.amountData.add(0);
}

const PERIOD = {
    DAY: 0,
    WEEK: 1,
    MONTH: 2
}
function setPeriod(period) {
    switch (period) {
        case PERIOD.DAY: {
            console.log("Day");
            break;
        }
        case PERIOD.WEEK: {
            console.log("Week");
            break;
        }
        case PERIOD.MONTH: {
            console.log("Month");
            break;
        }
    }
}

function showExpense(obj) {
    let JExpense = $("<div>");

    let icon = $("img");



    return JExpense;
}