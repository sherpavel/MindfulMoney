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
EXP_ARRAY = [
    // new Expense(Date.now(), 100, CATEGORY.FOOD, "Spicy 9"),
    // new Expense(Date.now()-2*(24*60*60*1000), 60, CATEGORY.FOOD, "Some food"),
    // new Expense(Date.now()-20*(24*60*60*1000), 80, CATEGORY.FOOD, "Some food"),
    // new Expense(Date.now()-25*(24*60*60*1000), 120, CATEGORY.FOOD, "Market"),

    // new Expense(Date.now()-1*(24*60*60*1000), 20, CATEGORY.UTILITIES, "Payment"),
    // new Expense(Date.now()-29*(24*60*60*1000), 20, CATEGORY.UTILITIES, "Payment"),
    // new Expense(Date.now()-63*(24*60*60*1000), 20, CATEGORY.UTILITIES, "Payment"),

    // new Expense(Date.now()-4*(24*60*60*1000), 20, CATEGORY.ENTERTAINMENT, "Movies"),
    // new Expense(Date.now()-7*(24*60*60*1000), 8, CATEGORY.ENTERTAINMENT, "Movies"),
];
window.onload = () => {
    isMobile = document.body.clientWidth < 700;

    expRoot = $("#expList");
 
    // Form
    $("#add_btn").on("click", () => {
        showAddForm = true;
        $("#main").addClass("blur");
        $("#overlay").addClass("show");
        $("#add_exp").css("filter", "opacity(0.2)");
    });
    function closeForm() {
        showAddForm = false;
        $("#main").removeClass("blur");
        $("#overlay").removeClass("show");
        $("#add_exp").removeAttr("style");
    }
    $(close_form_btn).on("click", closeForm);
    // Form submit
    $("#submit_exp_btn").on("click", () => {
        let name = $("#exp_name_input").val();
        let value = parseFloat($("#exp_value_input").val());
        let type = parseInt($("#exp_type_input").val());
        if (checkInput(name, 1, 20) && (value != NaN) && (type != NaN)) {
            EXP_ARRAY.push(new Expense(Date.now(), value, type, name));
            reBuildList();
            closeForm();
            saveItems();

            $("#exp_name_input").val("");
            $("#exp_value_input").val("");
            $("#exp_type_input").val("");
        } else {
        }
    });

    loadItems();
    reBuildList();

    // Change period
    let periodSelect = $("#period_select");
    CRT_PERIOD = parseInt(periodSelect.val());
    $("#total_textbox").text(timeTotal(CRT_PERIOD));
    periodSelect.change(() => {
        CRT_PERIOD = parseInt(periodSelect.val());
        $("#total_textbox").text(timeTotal(CRT_PERIOD));
    });
}

function reBuildList() {
    $(".expense").remove();
    EXP_ARRAY.sort((a, b) => {
        return b.time - a.time;
    });
    EXP_ARRAY.forEach(exp => {
        showExpense(exp);
    });

    localStorage.removeItem("expenses");
    saveItems();
}
const SPLIT_ITEM = '|';
const SPLIT_CHAR = '/';
function saveItems() {
    let itemsData = "";
    let i = 0;
    EXP_ARRAY.forEach(exp => {
        let data = exp.name + SPLIT_CHAR + exp.value + SPLIT_CHAR + exp.type + SPLIT_CHAR + exp.time;
        i++;
        itemsData += data + ((i != EXP_ARRAY.length) ? SPLIT_ITEM : "");
    });
    localStorage.setItem("expenses", itemsData);
}
function loadItems() {
    let itemsData = localStorage.getItem("expenses");
    if (!itemsData) return;
    let expData = itemsData.split(SPLIT_ITEM);
    expData.forEach(item => {
        let data = item.split(SPLIT_CHAR);
        EXP_ARRAY.push(new Expense(parseInt(data[3]), parseFloat(data[1]), parseInt(data[2]), data[0]));
    });
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

    let date = new Date(exp.time);
    textBox.append($("<p>").addClass("exp_text exp_date").text((date.getMonth()+1) + "/" + (date.getDate()) + "/" + date.getFullYear()));
    JExpense.append(textBox);

    let rightBox = $("<div>").addClass("right_box");

    rightBox.append($("<span>").addClass("exp_price").text("$" + exp.value));
    rightBox.append($("<hr>"));

    let delBtn = $(`<div class="delete_ico"><img src="${resPath+"Delete_Icon.svg"}" alt="X"></div>`);
    delBtn.on("click", () => {
        EXP_ARRAY.splice(EXP_ARRAY.indexOf(exp), 1);
        reBuildList();
    });
    rightBox.append(delBtn);

    JExpense.append(rightBox);

    expRoot.append(JExpense);

    return JExpense;
}

// Misc
function checkInput(str, minLength, maxLength) {
    return (/^[0-9a-zA-Z]+$/.test(str))
        && (str.length >= minLength && str.length <= maxLength);
}
