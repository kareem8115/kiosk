<template>
    <div class="col-12">


<div class="row">
    <div class="col-12 custom_height">


        <!--<a href="/details" @click="getAttorney">details</a>-->
        <h2 class="text-pepper font-weight-bold my-3">
            {{$t('FurijatBillPage.title')}}
        </h2>
        <h4 class="text-secondary my-3">
            {{$t('FurijatBillPage.subTitle')}}
        </h4>
        <div class="form-row" @keyup.enter="submit">

            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('FurijatBillPage.billNumberlabel')}}</label>
                    <input v-autofocus v-model="billNumber" type="number" :placeholder="$t('FurijatBillPage.billNumberPlaceholder')" class="form-control rounded-0 form-control-md">
                </div>
            </div>

        </div>
    </div>



        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('FurijatBillPage.infoButton')}} </router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>-->
                
                <router-link tag="button" :disabled="!billNumber" 
                            
                             :class="(billNumber)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                             :to="{ name: 'furijatDetails', params: { 'billNumber': this.billNumber } }">{{$t('FurijatBillPage.submitButton')}} </router-link>
                <a class="btn btn-outline-primary border-2 animated pulse infinite px-6"  @click="reset"> {{$t('FurijatBillPage.resetButton')}} </a>
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
    export default class Furijat extends Vue {
        billNumber: string = '1911146957';
        
        reset() {
            this.billNumber = '';
        }
        submit() {
            if (this.billNumber ) {
                this.$router.push({ name: 'furijatDetails', params: { 'billNumber': this.billNumber } })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
