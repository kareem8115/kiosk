<template>
    <div id="home" >
        <header class="bg-header bg-najiz-img w-100" style="height:380px !important;">

            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-11 col-xxl-10 col-xl-9">
                        <div class="row">
                            <div class="col-12">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <a  class="header__logoLink">
                                            <img src="/img/logo.svg" alt="najiz" width="150" class="my-2" />
                                        </a>
                                    </div>


                                    <div>

                                        <a >
                                            <img src="/img/vision-najiz.svg" alt="najiz" width="150" class="my-2" />
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-3">
                                <h4 class="font-weight-bold mb-3" style="line-height:2rem">
                                    {{$t('home.welcomeMessage1')}}  <br>
                                    {{$t('home.welcomeMessage2')}}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>
        <!-- Main layout -->




        <main>
            <div class="container-fluid" style="margin-top: 177px !important;">
                <div class="row justify-content-center">
                    <div class="col-11 col-xxl-10 col-xl-9">
                        <div class="row">

                            <div class="col-12 mt-1" id="footer">
                                <div class="d-flex justify-content-between py-3">
                                    <div class="d-inline-flex">
                                        <router-link :to="{path : '/login'}" class="btn btn-primary btn-sm border-2 animated pulse infinite px-2 py-3" >
                                            <i class="fa fa-lg fa-th mb-1"></i><br>{{$t('home.ElectronicService')}}
                                        </router-link>
                                        <router-link :to="{path : '/info'}" class="btn btn-default btn-sm border-2 animated pulse infinite px-2 py-3 mx-2">
                                            <i class="fa fa-lg fa-info mb-1"></i>
                                            <br>
                                            {{$t('home.infoButton')}}
                                        </router-link>
                                    </div>

                                    <div class="d-flex align-items-end">
                                        <a class="btn btn-outline-primary btn-sm border-2 animated pulse infinite px-3"  @click="changeLang">{{lanButton}}</a>
                                    </div>
                                </div>
                            </div>




                        </div>

                    </div>
                </div>
            </div>

        </main>



    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    //import { setDefaultlang } from '../i18n/index'
    import VueI18n from 'vue-i18n';
    import { Locales } from "../i18n/locales";
    @Component
    export default class Home extends Vue {
        @Prop() private msg!: string;
        lanButton = "English";
        mounted() {
            var lang = localStorage.getItem("lang");
            if (lang === 'en') {
                this.lanButton = "عربي";
            }
            else {
                this.lanButton = "English";
            }
            
        }
        changeLang() {
            var lang = localStorage.getItem("lang");
            if (lang === 'ar') {
                localStorage.setItem("lang", "en");
                // setDefaultlang("en");
                this.$root.$i18n.locale = Locales.EN;
                this.lanButton = "عربي";
                //change body tag to ltr
                //document.body.style.direction = 'ltr';
                document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
                document.getElementsByTagName("html")[0].setAttribute("lang", "en");
                document.title = "Najiz";
            }
            else {
                localStorage.setItem("lang", "ar");
                this.$root.$i18n.locale = Locales.AR;
                //setDefaultlang("ar");
                this.lanButton = "English";
                //document.body.style.direction = "rtl";
                document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
                document.getElementsByTagName("html")[0].setAttribute("lang", "ar");
                document.title = "ناجز";
            }

        }

        



    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
