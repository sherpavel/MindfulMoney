src="https://www.gstatic.com/charts/loader.js%22%3E"
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

function initPlot() {
    // var data = [{
    //     values: [typeTotal(CATEGORY.FOOD),typeTotal(CATEGORY.UTILITIES),typeTotal(CATEGORY.ENTERTAINMENT),typeTotal(CATEGORY.CUSTOM)],
    //     labels: ['Food', 'Utilities', 'Entertainment', 'Custom'],
    //     type: 'pie'
    // }];
      
    // var layout = {
    //     height: 400,
    //     width: 500
    // };
    
    // Plotly.newPlot('pie', data, layout);

    var data = google.visualization.arrayToDataTable([
        ['CATEGORY', 'AMOUNT SPENT'],
        ['Food',     typeTotal(CATEGORY.FOOD)],
        ['Utilities',      typeTotal(CATEGORY.UTILITIES)],
        ['Entertainment',  typeTotal(CATEGORY.ENTERTAINMENT)],
        ['Custom', typeTotal(CATEGORY.CUSTOM)],
        ]);

    var options = {
        title: 'Spending Report',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f']
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options); 
}
