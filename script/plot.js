import {timeTypeTotal} from "./budget";

timeTypeTotal()

var data = [{
    values: [19, 26, 55],
    labels: ['Food', 'Utilities', 'Entertainment', 'CUSTOM'],
    type: 'pie'
}];
  
var layout = {
    height: 400,
    width: 500
};

Plotly.newPlot('myDiv', data, layout);