let isMobile = false;

window.onresize = () => {
    isMobile = document.body.clientWidth < 700;
}

window.onload = () => {
    isMobile = document.body.clientWidth < 700;
    main();
}

function main() {
    let testArray = {

    };


    let f = new Food();
    f.amountData.add(10);
    console.log(f);
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