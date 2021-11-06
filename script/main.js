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
let showAddForm = false;
window.onload = () => {
    isMobile = document.body.clientWidth < 700;
    expRoot = $("#expList");
 
    // Form
    $("#add_btn").on("click", () => {
        showAddForm = true;
        $("#main").addClass("blur");
        $("#overlay").addClass("show");
    });

    $(close_form_btn).on("click", () => {
        showAddForm = false;
        $("#main").removeClass("blur");
        $("#overlay").removeClass("show");
    });


    // Form submit
    $("#submit_exp_btn").on("click", () => {
        let name = $("#exp_name_input").val();
        let value = parseFloat($("#exp_value_input").val());
        let type = $("#exp_type_input").val();
        if ((name && value && type) && checkInput(name, 1, 10)) {
            
        } else {
        }
    });
    
    // REMOVE
    $("#add_btn").click();

    // test
    let testArray = [
        new Expense(Date.now(), 100, Category.FOOD, "Spicy 9"),
        new Expense(Date.now() - 10000000000, 400, Category.ENTERTAINMENT, "Netflix"),
        new Expense(Date.now() - 8000000000, 10, Category.CUSTOM, "idk"),
        new Expense(Date.now() - 1000000000, 50, Category.UTILITIES, "Bills")
    ];

    testArray.sort((a, b) => {
        return b.time - a.time;
    });

    testArray.forEach(exp => {
        showExpense(exp);
    });
}

function setPeriod(period) {
    let periodText = $("#periodText");
    switch (period) {
        case PERIOD.DAY: {
            periodText.text("daily");
            break;
        }
        case PERIOD.WEEK: {
            periodText.text("weekly");
            break;
        }
        case PERIOD.MONTH: {
            periodText.text("monthly");
            break;
        }
    }
}

let resPath = "resources/";
function showExpense(exp) {
    let JExpense = $("<div>").addClass("expense");


    let icon = "";
    switch (exp.type) {
        case Category.FOOD:
            icon = "food_icon.svg";
            break;
        case Category.ENTERTAINMENT:
            icon = "entertainment_icon.svg";
            break;
        case Category.UTILITIES:
            icon = "utility_icon.svg";
            break;
        case Category.CUSTOM:
            icon = "other_icon.svg";
            break;
    }
    JExpense.append($(`<img src="${resPath+icon}" alt="">`));

    let textBox = $("<div>").addClass("exp_textbox");
    textBox.append($("<p>").addClass("exp_text").text(exp.name + " ... $" + exp.value));

    let date = new Date(exp.time);
    textBox.append($("<p>").addClass("exp_text exp_date").text(date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()));

    JExpense.append(textBox);

    expRoot.append(JExpense);

    return JExpense;
}

// Misc
function checkInput(str, minLength, maxLength) {
    return (/^[0-9a-zA-Z]+$/.test(str))
        && (str.length >= minLength && str.length <= maxLength);
}
