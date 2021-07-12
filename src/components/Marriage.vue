<template>
    <div class="col-12">

        <div class="row">
            <div class="col-12 custom_height">
                <!--<a href="/details" @click="getAttorney">details</a>-->
                <h2 class="text-pepper font-weight-bold my-3">
                    {{$t('marriagePage.title')}}
                </h2>
                <h4 class="text-secondary my-3">
                    {{$t('marriagePage.subTitle')}}
                </h4>
                <div class="form-row" @keyup.enter="submit">

                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="inputEmail4">{{$t('marriagePage.contractNumberlabel')}}</label>
                            <input v-autofocus v-model="contractNumber" type="number" :placeholder="$t('attorneyPage.attorneylabel')" class="form-control rounded-0 form-control-md">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="inputEmail4">{{$t('marriagePage.nartionalIdLabel')}}</label>
                            <input v-model="nationalId" type="number" :placeholder="$t('attorneyPage.nartionalIdLabel')" class="form-control rounded-0 form-control-md">
                        </div>
                    </div>
                </div>
            </div>



            <div class="col-12 mt-1" id="footer">
                <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                    <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('marriagePage.infoButton')}} </router-link>
                    <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>-->

                    <router-link tag="button" :disabled="(!nationalId) || (!contractNumber)"
                                 :class="(nationalId && contractNumber)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                                 :to="{ name: 'marriageDetails', params: { 'contractNumber': this.contractNumber, 'nationalId': this.nationalId } }">{{$t('marriagePage.submitButton')}} </router-link>
                    <a class="btn btn-outline-primary border-2 animated pulse infinite px-6" @click="reset"> {{$t('marriagePage.resetButton')}} </a>
                </div>
            </div>
        </div>
    </div>


</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import router from '../router';
    //@Options({

    //})
    @Component
    export default class Marriage extends Vue {
        contractNumber: string = '42502841';
        nationalId: string = '1016096859';
        reset() {
            this.contractNumber = '';
            this.nationalId = '';
        }

        submit() {
            if (this.contractNumber && this.nationalId) {
                //e.preventDefault();
                this.$router.push({
                    name: 'marriageDetails',
                    params: {
                        'contractNumber': this.contractNumber,
                        'nationalId': this.nationalId
                    }

                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
