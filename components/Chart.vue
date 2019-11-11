<template>
    <div>
        <h2 class="mb-3">Vergelijk omringende gemeenten</h2>

        <p class="text-center">
            OZB-belasting omringende gemeenten in €<br/>
            <strong>Na de verhoging schiet de gemeente Hellendoorn daar opvallend ver bovenuit.</strong>
        </p>
        <div class="chart-container">
            <client-only>
                <canvas id="ozbChart"></canvas>
            </client-only>
        </div>

        <script src="/Chart.min.js"></script>
        <script src="/drawChart.js"></script>
    </div>
</template>

<script>
    // import "chart.js"

    // Chart.js documentation:
    // https://github.com/chartjs/Chart.js/blob/master/docs/getting-started/usage.md
    export default {

        name: "Chart",
        data: function () {
            return {};
        },
        mounted() {
            // if (process.client) {
            //     drawChart(chartElm);
            // }
        }
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