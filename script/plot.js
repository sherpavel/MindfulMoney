function initPlot() {
    var data = [{
        values: [typeTotal(CATEGORY.FOOD),typeTotal(CATEGORY.UTILITIES),typeTotal(CATEGORY.ENTERTAINMENT),typeTotal(CATEGORY.CUSTOM)],
        labels: ['Food', 'Utilities', 'Entertainment', 'Custom'],
        type: 'pie'
    }];
      
    var layout = {
        height: 400,
        width: 500
    };
    
    Plotly.newPlot('myDiv', data, layout);
}
