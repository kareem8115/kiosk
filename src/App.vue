<template>

    <router-view />



</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Locales } from "./i18n/locales";


    @Component({
        components: {


        }
    })
    export default class App extends Vue {



        mounted() {
            var lang = localStorage.getItem("lang");

            if (lang === 'en') {

                this.$root.$i18n.locale = Locales.EN;
                //document.body.style.direction = 'ltr';
                document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
                document.getElementsByTagName("html")[0].setAttribute("lang", "en");
                document.title = "Najiz";
            }
            else {
                localStorage.setItem("lang","ar");
                // setDefaultlang("en");
                this.$root.$i18n.locale = Locales.AR;
                //document.body.style.direction = "rtl";
                document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
                document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
                document.title = "ناجز";

            }

           
        }
    }
</script>

<style>
    .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #3498db;
        width: 120px;
        height: 120px;
        -webkit-animation: spin 2s linear infinite; /* Safari */
        animation: spin 2s linear infinite;
    }
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}
    /* Safari */
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
</style>
