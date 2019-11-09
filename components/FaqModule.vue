<template>
    <div>
        <h2 class="mb-3">Vragen en antwoorden</h2>

        <p>
            <strong>Wie zijn wij?</strong>
            <a v-if="!faq_wiezijnwij" @click.prevent="faq_wiezijnwij=true" href="#">Toon het antwoord</a>
            <a v-if="faq_wiezijnwij" @click.prevent="faq_wiezijnwij=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_wiezijnwij">
            <p>
                Wij zijn inwoners van de gemeente Hellendoorn, niet verbonden aan een politieke partij en erg
                teleurgesteld in de beslissing van de gemeenteraad.
            </p>
            <p>
                Het is teleurstellend dat burgemeester en wethouders niets hebben gedaan met de resultaten van de
                gehouden publieksenquête. Ook de onderbouwde alternatieve voorstellen van de
                oppositiepartijen zijn aan de kant geschoven.
            </p>
            <p>
                De resultaten van de gehouden publieksenquête onder inwoners, ondernemers en organisaties zijn
                duidelijk, bijna 75% is niet bereid om een verhoging op de gemeentelijke belastingen te accepteren om de
                financiële problemen van de gemeente op te lossen. Daarom willen wij op deze manier proberen een
                block te vormen en de gemeente te dwingen naar andere oplossingen te zoeken.
            </p>
        </div>

        <p>
            <strong>Wat betekent OZB?</strong>
            <a v-if="!faq_ozb" @click.prevent="faq_ozb=true" href="#">Toon het antwoord</a>
            <a v-if="faq_ozb" @click.prevent="faq_ozb=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_ozb">
            <p>
                OZB is een belasting in Nederland die wordt geheven door gemeenten bij eigenaren en gebruikers van
                onroerend goed. Onder onroerend goed verstaan we de grond en daarbij behorende bouw zoals een pand
                of woning.
            </p>
            <p>
                In principe betaalt een huurder van een woning geen OZB, omdat de OZB in de vorm van
                eigenarenbelasting voor de rekening van de verhuurder is. Het kan echter zo zijn dat de verhuurder
                indirect de OZB doorberekent in de huurprijs. Vraag daarom altijd aan de verhuurder welke kosten er
                precies zijn meegenomen in de huurprijs.
            </p>
            <p>
                Ten grondslag aan de belasting ligt de WOZ-waarde van het onroerend goed. WOZ staat voor 'Wet
                waardering onroerende zaken'. Deze grondslag wordt gebruikt voor het heffen van belastingen door
                gemeenten, de Belastingdienst en de waterschappen. Het tarief van de onroerende zaakbelasting (OZB)
                wordt berekend aan de hand van een percentage van de WOZ-waarde. Dit percentage wordt elk jaar door
                de gemeenteraad vastgesteld.
            </p>
        </div>

        <p>
            <strong>Wat is de hoogte van de OZB-belasting in Hellendoorn nu?</strong>
            <a v-if="!faq_ozb_hellendoorn" @click.prevent="faq_ozb_hellendoorn=true" href="#">Toon het antwoord</a>
            <a v-if="faq_ozb_hellendoorn" @click.prevent="faq_ozb_hellendoorn=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_ozb_hellendoorn">
            <p>
                De aanslag OZB is gebaseerd op de waarde van uw onroerende zaak (WOZ). Het tarief van de OZB is een
                percentage van de WOZ-waarde. Het tarief voor woningen was in 2019: 0,1434%
            </p>
            <p>
                Rekenvoorbeeld op basis van een gemiddelde hoekwoning in de regio a <strong>€ 247.000,-</strong>
                betaalt u het volgende:
            </p>
            <p>
                0,1434 / 100 * 247000 = <strong>€ 354,20 per jaar</strong>
            </p>
        </div>

        <p>
            <strong>Wat is de hoogte van de OZB-belasting in Hellendoorn na 25% verhoging?</strong>
            <a v-if="!faq_ozb_hellendoorn2" @click.prevent="faq_ozb_hellendoorn2=true" href="#">Toon het antwoord</a>
            <a v-if="faq_ozb_hellendoorn2" @click.prevent="faq_ozb_hellendoorn2=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_ozb_hellendoorn2">
            <p>
                Rekenvoorbeeld op basis van een gemiddelde hoekwoning in de regio a <strong>€ 247.000,-</strong>
                betaalt u het volgende:
            </p>
            <ul>
                <li>In 2019 betaalde u: 0,1434 / 100 * 247000 = <strong>€ 354,20 per jaar</strong></li>
                <li>In 2020 betaalt u: 0,1434 / 100 * 247000 * 1,25 = <strong>€ 442,75 per jaar</strong></li>
            </ul>
            <p class="emphasize">
                <strong>In één jaar een verhoging van € 88,55! 😡😡😡</strong>
            </p>
        </div>


    </div>
</template>

<script>
    export default {
        name: "OzbRekenmodule",
        data: function () {
            return {
                faq_ozb: false,
                faq_wiezijnwij: false,
                faq_ozb_hellendoorn: false,
                faq_ozb_hellendoorn2: false
            };
        }
    }
</script>

<style scoped>
    a {
        color: #6a7280;
    }
    .emphasize {
        color: #b62939;
    }

</style>