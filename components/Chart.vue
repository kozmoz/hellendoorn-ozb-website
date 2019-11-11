<template>
    <div>
        <h2 class="mb-3">Vergelijk omringende gemeenten</h2>

        <div class="chart-wrapper" style="margin: 0 auto">
            <p class="text-center">
                OZB-belasting omringende gemeenten in €<br/>
                <strong>Na de verhoging schiet de gemeente Hellendoorn daar opvallend ver bovenuit.</strong>
            </p>
            <client-only>
                <canvas id="ozbChart" width="400" :height="height"></canvas>
            </client-only>
        </div>
    </div>
</template>

<script>
    import "chart.js"

    // Chart.js documentation:
    // https://github.com/chartjs/Chart.js/blob/master/docs/getting-started/usage.md
    export default {

        name: "Chart",
        data: function () {
            return {};
        },
        computed: {
            height() {
                if (process.client) {
                    return global.window.innerWidth > 576 ? 200 : 400;
                }
                return 0;
            }
        },
        mounted() {
            if (!process.client) {
                return;
            }

            // It takes two ticks to render the canvas.
            this.$nextTick(() => {
                this.$nextTick(() => {
                    const chartElm = global.document.getElementById('ozbChart');
                    drawChart(chartElm);
                });
            });
        }
    }

    function drawChart(chartElm) {
        const proprtyPrice = 247000;
        const ctx = chartElm.getContext('2d');
        const ozbChart = new Chart(ctx, {
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
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
</script>

<style scoped>
    .chart-wrapper {
    }

    @media (max-width: 575.98px) {
        .chart-wrapper {
            max-width: 90vw;
            width: 90vw;
        }
    }
</style>