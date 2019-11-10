<template>
    <div>
        <h2 class="mb-3">Contact</h2>

        <p>Neem contact met ons op via onderstaande formulier.</p>

        <form name="contact" data-netlify="true">
            <div class="form-group">
                <label for="namefield">Naam</label>
                <input type="text" class="form-control" id="namefield" name="name" style="max-width: 25em"/>
            </div>
            <div class="form-group">
                <label for="emailfield">E-mailadres</label>
                <input type="email" class="form-control" id="emailfield" name="email" style="max-width: 25em"/>
            </div>
            <div class="form-group">
                <label for="descriptionfield">Opmerkingen</label>
                <textarea class="form-control" id="descriptionfield" rows="3" name="description"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Verzend gegevens</button>
        </form>
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