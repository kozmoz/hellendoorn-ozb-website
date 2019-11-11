function drawChart(chartElm) {
    if (!chartElm) {
        return;
    }
    var proprtyPrice = 247000;
    var ctx = chartElm.getContext('2d');
    var ozbChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Lochem',
                'Rijssen-Holten',
                'Wierden',
                'Dalfsen',
                'Hof van Twente',
                'Ommen',
                'Raalte',
                'Hellendoorn',
            ],
            datasets: [{
                label: '',
                data: [
                    (0.0860 / 100 * proprtyPrice).toFixed(2),
                    (0.1019 / 100 * proprtyPrice).toFixed(2),
                    (0.1061 / 100 * proprtyPrice).toFixed(2),
                    (0.1102 / 100 * proprtyPrice).toFixed(2),
                    (0.1143 / 100 * proprtyPrice).toFixed(2),
                    (0.1199 / 100 * proprtyPrice).toFixed(2),
                    (0.1352 / 100 * proprtyPrice).toFixed(2),
                    (0.17925 / 100 * proprtyPrice).toFixed(2)
                ],
                backgroundColor: [
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(64, 64, 64, 0.2)',
                    'rgba(255, 0, 0, 0.8)',
                ],
                borderColor: [
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(64, 64, 64, 1)',
                    'rgba(255, 0, 0, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            // https://github.com/chartjs/Chart.js/blob/master/docs/configuration/legend.md
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            maintainAspectRatio: false
        }
    });
}

setTimeout(function () {
    var chartContainerElm = document.getElementById('chartContainer');
    if (chartContainerElm) {
        var canvas = document.createElement('canvas');
        chartContainerElm.appendChild(canvas);
        drawChart(canvas);
    } else {
        console.log('==== chartElm not found!');
    }
}, 1000);
