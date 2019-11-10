<template>
    <div class="bg-light2 p-3">
        <h2 class="mb-3">OZB rekenhulp</h2>

        <p>Bereken aan de hand van de WOZ-waarde van de woning de OZB-belasting van het afgelopen jaar en voor 2020.</p>
        <p><a href="#" @click.prevent="setWoz(247000)">Gebruik als voorbeeld de gemiddelde woningwaarde van €
            247.000,-</a></p>
        <form>
            <div class="row">
                <div class="col-12 col-md-4">
                    <div class="form-group">
                        <label for="woz">WOZ-waarde van de woning</label>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1">&euro;</span>
                            </div>
                            <input type="number" class="form-control" id="woz" aria-describedby="help" v-model="woz"
                                   style="max-width: 14em" @keyup="wozChange()"/>
                        </div>
                        <small id="help" class="form-text text-muted">Typ hier de waarde van de woning, in hele
                            euro's.</small>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div v-if="ozb2019">
                        <strong>In 2019 was de OZB-belasting:</strong>
                        <p class="amount mt-2">€ {{ozb2019 | amount}}</p></div>
                </div>
                <div class="col-12 col-md-4">
                    <div v-if="ozb2020" id="ozb-result">
                        <strong>In 2020 is de OZB-belasting:</strong>
                        <p class="amount mt-2 mb-0">
                            € {{ozb2020 | amount}}
                            <span class="emphasize">(+{{ozb2020 - ozb2019 | amount}}!)</span>
                        </p>
                        <p class="angry">😡😡😡</p>
                    </div>

                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "OzbRekenmodule",
        data: function () {
            return {woz: ''};
        },
        filters: {
            amount(value) {
                return (+value)
                    .toFixed(2)
                    .replace(/,/, '')
                    .replace('.', ',');
            }
        },
        computed: {
            ozb2019() {
                return ((this.woz * 1) * 0.1434 / 100);
            },
            ozb2020() {
                return ((this.woz * 1) * 0.1434 / 100 * 1.25);
            }
        },
        methods: {
            setWoz(value) {
                this.woz = '' + value;
            },
            /**
             * Ensure the result is visible.
             */
            wozChange() {
                let ozbResult = global.document.getElementById('ozb-result');
                if (ozbResult) {
                    ozbResult.scrollIntoView(false);
                }
            }
        }
    }
</script>

<style scoped>
    div.bg-light2 {
        background-color: #ecedee;
    }

    a {
        color: #6a7280;
    }

    .amount {
        font-family: "Courier New", monospace;
        font-size: 24px;
        font-weight: bold;
    }

    .angry {
        font-size: 48px;
    }
</style>