<template>
    <div>
        <h2 class="mb-3">Vergelijk omringende gemeenten</h2>

        <p class="text-center mb-0">
            OZB-belasting omringende gemeenten in &euro;
        </p>
        <p class="text-center">
            <strong>Na verhoging schiet de gemeente Hellendoorn daar opvallend ver bovenuit.</strong>
        </p>

        <div class="chart-container" id="chartContainer">
            <!-- placeholder for canvas. -->
        </div>
    </div>
</template>

<script>
    import Chart from "chart.js"

    // Chart.js documentation:
    // https://github.com/chartjs/Chart.js/blob/master/docs/getting-started/usage.md
    export default {

        name: "Chart",
        data: function () {
            return {};
        },
        mounted() {
            if (!process.client) {
                return;
            }
            setTimeout(() => {
                const chartContainerElm = document.getElementById('chartContainer');
                if (chartContainerElm) {
                    const canvas = document.createElement('canvas');
                    chartContainerElm.appendChild(canvas);
                    drawChart(canvas);
                } else {
                    console.log('==== chartContainer not found!');
                }
            }, 1000);
        }
    }

    function drawChart(chartElm) {
        if (!chartElm) {
            return;
        }
        const proprtyPrice = 247000;
        const ctx = chartElm.getContext('2d');
        new Chart(ctx, {
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

</script>

<style scoped>
    /* https://www.chartjs.org/docs/latest/general/responsive.html */
    .chart-container {
        position: relative;
        height: 350px;
        max-width: 90vw;
    }

    @media (max-width: 767.98px) {
        .chart-container {
            width: 80vw
        }
    }

    @media (max-width: 575.98px) {
        .chart-container {
            height: 400px;
            width: 90vw
        }
    }
</style>