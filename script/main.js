let isMobile = false;

window.onresize = () => {
    isMobile = document.body.clientWidth < 700;
}

let CRT_PERIOD = PERIOD.DAY;

let expRoot;
let showAddForm = false;
let EXP_ARRAY = [
    new Expense(Date.now(), 100, CATEGORY.FOOD, "qwe"),
    new Expense(Date.now()-1000000000, 200, CATEGORY.UTILITIES, "asd"),
    new Expense(Date.now()-10000000000, 300, CATEGORY.ENTERTAINMENT, "zxc"),
    new Expense(Date.now()-10000000000, 300, CATEGORY.CUSTOM, "ghj"),
    new Expense(Date.now(), 100, CATEGORY.FOOD, "qwe"),
    new Expense(Date.now()-1000000000, 200, CATEGORY.UTILITIES, "asd"),
    new Expense(Date.now()-10000000000, 300, CATEGORY.ENTERTAINMENT, "zxc"),
    new Expense(Date.now()-10000000000, 300, CATEGORY.CUSTOM, "ghj"),
    new Expense(Date.now(), 100, CATEGORY.FOOD, "qwe"),
    new Expense(Date.now()-1000000000, 200, CATEGORY.UTILITIES, "asd"),
    new Expense(Date.now()-10000000000, 300, CATEGORY.ENTERTAINMENT, "zxc"),
    new Expense(Date.now()-10000000000, 300, CATEGORY.CUSTOM, "ghj"),
];
window.onload = () => {
    isMobile = document.body.clientWidth < 700;
    expRoot = $("#expList");
 
    // Form
    $("#add_btn").on("click", () => {
        showAddForm = true;
        $("#main").addClass("blur");
        $("#overlay").addClass("show");
    });
    function closeForm() {
        showAddForm = false;
        $("#main").removeClass("blur");
        $("#overlay").removeClass("show");
    }
    $(close_form_btn).on("click", () => {
        closeForm();
    });


    // Form submit
    $("#submit_exp_btn").on("click", () => {
        let name = $("#exp_name_input").val();
        let value = parseFloat($("#exp_value_input").val());
        let type = parseInt($("#exp_type_input").val());
        if (checkInput(name, 1, 10)) {
            EXP_ARRAY.push(new Expense(Date.now(), value, type, name));
            reBuildList();
            closeForm();
        } else {
            console.log("error");
        }
    });

    reBuildList();
}
function reBuildList() {
    $(".expense").remove();
    EXP_ARRAY.sort((a, b) => {
        return b.time - a.time;
    });
    EXP_ARRAY.forEach(exp => {
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
        case CATEGORY.FOOD:
            icon = "Categories_Food_icon.svg";
            break;
        case CATEGORY.ENTERTAINMENT:
            icon = "Categories_Entertainment_Icon.svg";
            break;
        case CATEGORY.UTILITIES:
            icon = "Categories_Utility_icon.svg";
            break;
        case CATEGORY.CUSTOM:
            icon = "Categories_other_Icon.svg";
            break;
    }
    JExpense.append($(`<div class="type_ico"><img src="${resPath+icon}" alt=""></div>`));

    let textBox = $("<div>").addClass("exp_textbox");
    textBox.append($("<span>").addClass("exp_text").text(exp.name));
    textBox.append($("<span>").addClass("exp_text").text("$" + exp.value));

    let date = new Date(exp.time);
    textBox.append($("<p>").addClass("exp_text exp_date").text(date.getMonth() + "/" + date.getDay() + "/" + date.getFullYear()));
    JExpense.append(textBox);

    let delBtn = $(`<div class="delete_ico"><img src="${resPath+"Delete_Icon.svg"}" alt="X"></div>`);
    delBtn.on("click", () => {
        EXP_ARRAY.splice(EXP_ARRAY.indexOf(exp), 1);
        reBuildList();
    });
    JExpense.append(delBtn);

    expRoot.append(JExpense);

    return JExpense;
}

// Misc
function checkInput(str, minLength, maxLength) {
    return (/^[0-9a-zA-Z]+$/.test(str))
        && (str.length >= minLength && str.length <= maxLength);
}
