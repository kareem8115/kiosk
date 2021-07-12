<!--<template>
    <div class="col-12">

<div class="row">
    <div class="col-12 custom_height" @keyup.enter="submit">
        <a href="/details" @click="getAttorney">details</a>

        <h2 class="text-pepper font-weight-bold my-3">
            {{$t('attorneyPage.title')}}
        </h2>

        <h4 class="text-secondary font-weight-bold my-3">
            {{$t('attorneyPage.subTitle')}}
        </h4>
        <div class="form-row">

            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('attorneyPage.attorneylabel')}}</label>
                    <input  v-autofocus v-model="attorneyNumber" type="number" :placeholder="$t('attorneyPage.attorneylabel')" class="form-control rounded-0 form-control-md">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('attorneyPage.nartionalIdLabel')}}</label>
                    <input   v-model="nationalId" type="number" :placeholder="$t('attorneyPage.nartionalIdLabel')" class="form-control rounded-0 form-control-md">
                </div>
            </div>
        </div>


    </div>

        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('attorneyPage.infoButton')}} </router-link>
                <a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>

                <router-link 
                             :class="(nationalId && attorneyNumber)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                             :to="{ name: 'attorneyDetails', params: { 'attorneyNumber': this.attorneyNumber, 'nationalId': this.nationalId } }">{{$t('attorneyPage.submitButton')}} </router-link>
                <a class="btn btn-outline-primary border-2 animated pulse infinite px-6"  @click="reset"> {{$t('attorneyPage.resetButton')}} </a>
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
    export default class Test extends Vue {
        attorneyNumber: string = '422371886';
        nationalId: string = '2424404131';
        
       
        reset() {
            this.attorneyNumber = '';
            this.nationalId = '';
        }
        submit(e) {

            if (this.attorneyNumber && this.attorneyNumber) {
                //e.preventDefault();
                this.$router.push(
                    { name: 'attorneyDetails', params: { 'attorneyNumber': this.attorneyNumber, 'nationalId': this.nationalId } }

                )
            }
            
            
        //    this.$router.push({ name: 'attorneyDetails', params: { 'attorneyNumber': this.attorneyNumber, 'nationalId': this.nationalId } });
        }
    }
</script>

 Add "scoped" attribute to limit CSS to this component only 
<style scoped>
</style>-->
