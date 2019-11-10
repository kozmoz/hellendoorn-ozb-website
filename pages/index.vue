<template>
    <div class="container">
        <div>
            <!-- Your share button code -->
            <div class="fb-share-button"
                 data-href="https://hellendoornozb.nl"
                 data-layout="button">
            </div>

            <h1 class="title justify">
                <span class="emphasize">Nee</span> tegen <span class="emphasize">25%</span>
                <span class="unbreakable">OZB-verhoging!</span>
            </h1>

            <div class="mb-3 justify">
                <img src="~/assets/ozb-verhoging.png" alt="" width="450" title="Hellendoorn OZB-verhoging 25%"/>
            </div>

            <blockquote class="blockquote justify font-italic">
                <p>
                    &ldquor;Het is teleurstellend dat burgemeester en wethouders van de gemeente Hellendoorn niets
                    hebben gedaan met de resultaten van de gehouden publieksenquête.&rdquor;
                </p>
            </blockquote>

            <p>&nbsp;</p>

            <div class="alert alert-warning" role="alert">
                <h4 class="alert-heading">Deze absurde verhoging van de OZB-belasting gaan wij als inwoners niet
                    betalen!</h4>
                <p>
                    Er moeten andere keuzes gemaakt worden om de begroting weer op orde te krijgen.
                </p>
                <ol>
                    <li>Bezuinigen in het gemeentehuis (ambtenaren en bestuur)</li>
                    <li>verkoop van gemeentelijk eigendom (gebouwen en gronden)</li>
                </ol>
                <hr>


                <p>
                    <strong>Wat is het plan?</strong>
                    Wij als inwoners van de gemeente Hellendoorn maken een vuist tegen de gemeente door de
                    verhoging van de OZB-belasting niet te betalen.
                    <strong>de Automatische incasso voor de OZB-belasting zetten wij stop en wij maken
                        een bedrag minus 25% over naar de gemeente.</strong>
                </p>
            </div>


            <div class="block-sep">
                <faq-module></faq-module>
            </div>

            <div class="block-sep">
                <ozb-rekenmodule></ozb-rekenmodule>
            </div>

            <div class="block-sep">
                <news></news>
            </div>

            <div class="block-sep">
                <contact></contact>
            </div>


        </div>
        <!-- Load Facebook SDK for JavaScript -->
        <div id="fb-root"></div>
        <script>(function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    </div>

</template>

<script>
    import OzbRekenmodule from "../components/OzbRekenmodule";
    import FaqModule from "../components/FaqModule";
    import Contact from "../components/Contact";
    import News from "../components/News";

    export default {
        components: {
            FaqModule,
            OzbRekenmodule,
            Contact,
            News
        }
    }
</script>

<style>
    h1 {
        margin-bottom: 2rem;
    }

    .emphasize {
        color: #b62939;
    }

    .unbreakable {
        white-space: nowrap;
    }

    .media, .media:hover {
        color: #212529;
    }

    .block-sep {
        position: relative;
        padding: 1rem;
        margin: 1rem -15px 0;
        border: solid #f8f9fa;
        border-width: .2rem 0 0;
    }

    .container {
        margin: 0 auto;
        min-height: 100vh;
        display: flex;
    }

    .justify {
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
