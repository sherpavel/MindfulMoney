let isMobile = false;

window.onresize = () => {
    isMobile = document.body.clientWidth < 700;
}


const PERIOD = {
    DAY: 0,
    WEEK: 1,
    MONTH: 2
}
let CRT_PERIOD = PERIOD.DAY;

let expRoot;
window.onload = () => {
    isMobile = document.body.clientWidth < 700;
    expRoot = $("#expList");
    main();
}
function main() {
    let testArray = [
        new Expense(Date.now(), 100, Category.FOOD),
        new Expense(Date.now() - 10000, 400, Category.ENTERTAINMENT),
        new Expense(Date.now() + 20000, 10, Category.CUSTOM),
    ];

    testArray.forEach(exp => {
        showExpense(exp);
    });
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


function showExpense(exp) {
    let JExpense = $("<div>").addClass("expense");

    expRoot.append(JExpense);

    return JExpense;
}