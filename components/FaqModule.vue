<template>
    <div id="FaqModule">
        <h2 class="mb-3">Vragen en antwoorden</h2>

        <p>
            <strong>Wie zijn wij?</strong>
            <a v-if="!faq_wiezijnwij" @click.prevent="faq_wiezijnwij=true" href="#">Klik hier voor het antwoord</a>
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
            <a v-if="!faq_ozb" @click.prevent="faq_ozb=true" href="#">Klik hier voor het antwoord</a>
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
            <a v-if="!faq_ozb_hellendoorn" @click.prevent="faq_ozb_hellendoorn=true" href="#">Klik hier voor het
                antwoord</a>
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
            <a v-if="!faq_ozb_hellendoorn2" @click.prevent="faq_ozb_hellendoorn2=true" href="#">Klik hier voor het
                antwoord</a>
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


        <p>
            <strong>Wanneer ontvang ik mijn aanslag voor OZB-belasting?</strong>
            <a v-if="!faq_ozb_aanslag" @click.prevent="faq_ozb_aanslag=true" href="#">Klik hier voor het antwoord</a>
            <a v-if="faq_ozb_aanslag" @click.prevent="faq_ozb_aanslag=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_ozb_aanslag">
            <p>
                Afgelopen jaar werd de aanslag voor de gemeentelijke belastingen 25 februari verstuurd naar alle
                inwoners van de gemeente Hellendoorn. <br/>
                <em><u>De aanslag voor 2020 wordt eind februari verwacht</u></em>.
            </p>
            <p>
                De inwoners die zich digitaal hebben aangemeld via de
                <a href="https://mijn.overheid.nl" target="_blank" rel="noopener" class="normal-link">"Berichtenbox"-app
                    van MijnOverheid</a>, zullen
                de aanslag ook dit jaar weer digitaal ontvangen op hun smartphone. Voor de overige inwoners wordt de
                aanslag per post verstuurd.
            </p>
            <p>
                Naast de onroerende-zaakbelastingen (OZB) bevat deze aanslag ook de afvalstoffenheffing voor de
                inzameling van afvalstoffen, de rioolheffing en de hondenbelasting. De aanslag kan in tien termijnen
                via automatisch-incasso of in één-, twee- of vier keer via een bankoverschrijving betaald worden.
            </p>
        </div>


        <p>
            <strong>Klagen over hoogte van OZB-belasting?</strong>
            <a v-if="!faq_ozb_klacht" @click.prevent="faq_ozb_klacht=true" href="#">Klik hier voor het
                antwoord</a>
            <a v-if="faq_ozb_klacht" @click.prevent="faq_ozb_klacht=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_ozb_klacht">
            <p>
                De gemeenteraad heeft beslist dat er een verhoging komt van de OZB-belasting.
                <strong>Aan- en of opmerkingen of een klacht over de hoogte van de OZB-belasting?
                    Laat het weten aan de gemeente!</strong>
            </p>
            <p>
                De gemeente Hellendoorn is op de volgende manieren te bereiken:
            </p>
            <ul>
                <li>
                    <em><u>E-mail</u></em> - bereikbaar via <a class="normal-link"
                                                        href="mailto:gemeente@hellendoorn.nl?subject=OZB-belasting">gemeente@hellendoorn.nl</a>.
                </li>
                <li>
                    <em><u>Telefoon</u></em> - Voor informatie over aanslagen, WOZ-waarderingen, bezwaar, betalingen,
                    betalingsregelingen
                    en kwijtschelding belt u met 0548-630216.
                </li>
                <li>
                    <em><u>Post</u></em> - Brieven over de gemeentelijke belastingen stuurt u naar de heffingsambtenaar,
                    postbus 200, 7440 AE Nijverdal. <br/>
                    Vermeld in uw brief het aanslagnummer, belastingjaar, soort belasting en ook uw telefoonnummer en
                    eventueel emailadres.
                </li>
                <li>
                    <em><u>Bezoek</u></em> - U kunt langskomen in het Huis voor Cultuur en Bestuur aan de
                    Willem-Alexanderstraat 7 te Nijverdal. Kijk voor actuele openingstijden op <a
                        href="https://hellendoorn.nl" target="_blank" rel="noopener" class="normal-link">www.hellendoorn.nl</a>
                    of op de gemeentelijke pagina’s in het Twents Volksblad.
                </li>
            </ul>
        </div>

        <!--
        <p>
            <strong>Wanneer ontvang ik mijn aanslag voor de OZB-belasting?</strong>
            <a v-if="!faq_ozb_aanslag2" @click.prevent="faq_ozb_aanslag2=true" href="#">Klik hier voor het
                antwoord</a>
            <a v-if="faq_ozb_aanslag2" @click.prevent="faq_ozb_aanslag2=false" href="#">Verberg het antwoord</a>
        </p>
        <div class="pl-3 pb-3" v-if="faq_ozb_aanslag2">
            <p>
                Als u het voorgaande jaar betaalde via automatische incasso, heeft de gemeente een machtiging
                om het bedrag automatisch af te schrijven. Het incassant ID is NL98ZZZ082218590000.
            </p>
            <p>
                Bij automatische incasso schrijft de gemeente de aanslag in tien maandelijkse termijnen
                automatisch van de rekening af.

                • Internetbankieren of overschrijfformulier. Afhankelijk van het aanslagbedrag moet u de aanslag in
                twee of vier termijnen
                betalen. U MOET HET EXACTE AANSLAGNUMMER VERMELDEN, ANDERS WORDT UW BETALING NIET OF ONJUIST
                VERWERKT.
                Het bankrekeningnummer is NL54 BNGH 0285 0667 65.

                WANNEER MOET IK BETALEN?
                De betalingstermijnen staan op de voorkant van dit aanslagbiljet. Bij vier betalingstermijnen moet u
                bij elke betalingstermijn een vierde deel van het totaal verschuldigde bedrag betalen.
                Bij twee betalingstermijnen moet u bij elke betalingstermijn de helft betalen. Uiteraard mag u voor
                of op de eerste betalingstermijn het gehele bedrag ineens betalen. Wanneer er tien
                betalingstermijnen op uw aanslag staan, betekent dit dat de gemeente automatisch gaat afschrijven.
                Het is niet toegestaan om zelf in tien keer over te maken.
            </p>
        </div>
        -->

    </div>
</template>

<script>
    export default {
        name: "FaqModule",
        data: function () {
            return {
                faq_ozb: false,
                faq_wiezijnwij: false,
                faq_ozb_hellendoorn: false,
                faq_ozb_hellendoorn2: false,
                faq_ozb_aanslag: false,
                faq_ozb_aanslag2: false,
                faq_ozb_klacht: false
            };
        }
    }
</script>

<style scoped>
    a:not(.normal-link) {
        color: #6a7280;
    }

    .emphasize {
        color: #b62939;
    }

</style>