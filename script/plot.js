google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['CATEGORY', 'AMOUNT SPENT'],
        ['Food',     typeTotal(CATEGORY.FOOD)],
        ['Utilities',      typeTotal(CATEGORY.UTILITIES)],
        ['Entertainment',  typeTotal(CATEGORY.ENTERTAINMENT)],
        ['Custom', typeTotal(CATEGORY.CUSTOM)],
        ]);

    var options = {
        pieHole: 0.5,
        colors: ['#ffaa00', '#ff2929', '#008cff', '#ffffff'],
        legend: {position: 'bottom', textStyle: {color: '#e6e6e6', fontSize: 18}},
        backgroundColor: {fill: "#26262b"},
        chartArea: {left: 0, top: 5, width: '100%', height: '80%'},
        forceIFrame: false,
        pieSliceText: 'none',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options); 
}
