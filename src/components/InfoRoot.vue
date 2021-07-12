<template>
    <div>
        <header class="bg-header w-100">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-11 col-xxl-10 col-xl-9">
                        <div class="row">
                            <div class="col-12">
                                <a  class="header__logoLink">
                                    <img src="/img/logo.svg" alt="najiz" width="150" class="my-2">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <main>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-11 col-xxl-10 col-xl-9">
                        <div class="row">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </main>



    </div>
                    <!--</div>-->
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class InfoRoot extends Vue {

       

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
