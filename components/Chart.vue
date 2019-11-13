<template>
    <div>
        <h2 class="mb-3">Vergelijk omringende gemeenten</h2>

        <p class="text-center mb-0">
            OZB-belasting* omringende gemeenten in 2020
        </p>
        <p class="text-center mb-0">
            <strong>Na verhoging schiet de gemeente Hellendoorn daar opvallend ver bovenuit.</strong>
        </p>

        <p class="text-center text-muted small">* Gebaseerd op een WOZ-waarde van {{propertyPrice | formatPrice }}</p>

        <div class="form-group row">
            <label for="wozchart" class="col col-form-label text-right">Wijzig de WOZ-waarde:</label>
            <div class="col-5 col-md-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">&euro;</span>
                    </div>
                    <input id="wozchart" name="woz" class="form-control" type="number" v-model="propertyPriceField"
                       @keyup="updateChart()"/>
                </div>
            </div>
        </div>

        <div class="chart-container" id="chartContainer">
            <!-- placeholder for canvas. -->
        </div>
    </div>
</template>

<script>
    import Chart from "chart.js"

    // Initial property price.
    let propertyPrice = 247000;
    // Bar chart canvas.
    let canvas;
    let debouncedDrawFn;

    // Chart.js documentation:
    // https://github.com/chartjs/Chart.js/blob/master/docs/getting-started/usage.md
    export default {

        name: "Chart",
        data: function () {
            return {
                propertyPrice,
                propertyPriceField: propertyPrice
            };
        },
        mounted() {
            // Render bar chart only on client side.
            if (!process.client) {
                return;
            }
            setTimeout(() => {
                const chartContainerElm = document.getElementById('chartContainer');
                if (chartContainerElm) {
                    canvas = document.createElement('canvas');
                    chartContainerElm.appendChild(canvas);
                    drawChart(canvas);

                    debouncedDrawFn = debounce(() => {
                        drawChart(canvas);
                    }, 600)
                }
            }, 1000);
        },
        methods: {
            updateChart: function () {
                this.propertyPriceField = (this.propertyPriceField || '').replace(/[.,e]/g, '');
                const field = +this.propertyPriceField;
                if (field >= 0 && this.propertyPrice !== field) {
                    this.propertyPrice = field;
                    propertyPrice = field;
                    debouncedDrawFn();
                }
            }
        },
        filters: {
            formatPrice(price) {
                return formatPrice(price);
            }
        }
    }

    function drawChart(chartElm) {
        if (!chartElm) {
            return;
        }
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
                    label: '€',
                    data: [
                        (0.0860 / 100 * propertyPrice).toFixed(2),
                        (0.1019 / 100 * propertyPrice).toFixed(2),
                        (0.1061 / 100 * propertyPrice).toFixed(2),
                        (0.1102 / 100 * propertyPrice).toFixed(2),
                        (0.1143 / 100 * propertyPrice).toFixed(2),
                        (0.1199 / 100 * propertyPrice).toFixed(2),
                        (0.1352 / 100 * propertyPrice).toFixed(2),
                        (0.17925 / 100 * propertyPrice).toFixed(2)
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
                            beginAtZero: true,
                            callback: function(label) {
                                // Put an EURO sign in front of the labels at the y-axis.
                                return ('€ ' + label).replace('.', ',');
                            }
                        }
                    }]
                },
                maintainAspectRatio: false
            }
        });
    }

    /**
     * Format the given price in NL format.
     *
     * @param {number} prince
     * @returns {string} Price formatted for NL
     */
    function formatPrice(prince) {
        // NodeJS only has support for en-US.
        return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'EUR'})
            .format(prince || 0)
            .replace('.', 'x')
            .replace(/,/g, '.')
            .replace('x', ',').replace(',00', ',-');
    }

    /**
     * https://davidwalsh.name/javascript-debounce-function
     *
     * @param func
     * @param wait
     * @param immediate
     * @returns {function(...[*]=)}
     */
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
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