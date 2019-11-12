<template>
    <div>
        <h2 class="mb-3">Contact</h2>

        <p>Neem contact met ons op via onderstaande formulier.</p>

        <!-- Actually the form is in /static/dummyform.html -->
        <!-- https://stackoverflow.com/questions/57200502/netlify-does-not-recognize-form-in-nuxt-app -->
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact"/>
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
        name: "Contact"
    }
</script>

<style scoped>

</style>