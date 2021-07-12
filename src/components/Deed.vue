<template>
    <div class="col-12">

<div class="row">
    <div class="col-12 custom_height" @keyup.enter="submit">
        <!--<a href="/details" @click="getAttorney">details</a>-->
        <h2 class="text-pepper font-weight-bold my-3">
            {{$t('deedPage.title')}}
        </h2>
        <h4 class="text-secondary my-3">
            {{$t('deedPage.subTitle')}}
        </h4>
        <div class="form-row">

            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('deedPage.deednolabel')}}</label>
                    <input v-autofocus v-model="deedNumber" type="number" :placeholder="$t('attorneyPage.attorneylabel')" class="form-control rounded-0 form-control-md">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('deedPage.nartionalIdLabel')}}</label>
                    <input v-model="nationalId" type="number" :placeholder="$t('attorneyPage.nartionalIdLabel')" class="form-control rounded-0 form-control-md">
                </div>
            </div>
        </div>


    </div>

        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('deedPage.infoButton')}} </router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>-->

                <router-link tag="button" :disabled="(!nationalId) || (!deedNumber)" 
                             :class="(nationalId && deedNumber)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                             :to="{ name: 'deedDetails', params: { 'deedNumber': this.deedNumber, 'nationalId': this.nationalId } }">{{$t('deedPage.submitButton')}} </router-link>
               
                <a class="btn btn-outline-primary border-2 animated pulse infinite px-6"  @click="reset"> {{$t('deedPage.resetButton')}} </a>
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
    export default class Deed extends Vue {
        deedNumber: string = '332402003093';
        nationalId: string = '1032063123';
        reset() {
            this.deedNumber = '';
            this.nationalId = '';
        }
        submit() {
            if (this.deedNumber && this.nationalId) {
                //e.preventDefault();
                this.$router.push(
                    { name: 'deedDetails', params: { 'deedNumber': this.deedNumber, 'nationalId': this.nationalId } }
                )
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
