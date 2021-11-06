let isMobile = false;

window.onresize = () => {
    isMobile = document.body.clientWidth < 700;
}

window.onload = () => {
    isMobile = document.body.clientWidth < 700;
    main();
}


const PERIOD = {
    DAY: 0,
    WEEK: 1,
    MONTH: 2
}
let CRT_PERIOD = PERIOD.DAY;

function main() {
    let testArray = [
        new Food(), new Food()
    ];
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