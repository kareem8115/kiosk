<template>
    <div class="col-12">

<div class="row">
        <div class="col-12 custom_height">
        <!--<a href="/details" @click="getAttorney">details</a>-->

            <h2 class="text-pepper font-weight-bold my-3">
                {{$t('inhaatDeedPage.title')}} {{$t(trans)}}
            </h2>

            <h4 class="text-secondary font-weight-bold my-3">
                {{$t('inhaatDeedPage.subTitle')}} {{$t(trans)}}
            </h4>
        <div class="form-row" @keyup.enter="submit">

            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('inhaatDeedPage.deedNoLabel')}}</label>
                    <input v-autofocus v-model="deedNo" type="number" :placeholder="$t('inhaatDeedPage.deedNoPlaceholder')" class="form-control rounded-0 form-control-md">
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="form-group">
                    <label for="inputEmail4">{{$t('inhaatDeedPage.socialIdLabel')}}</label>
                    <input v-model="socialId" type="number" :placeholder="$t('inhaatDeedPage.socialIdPlaceholder')" class="form-control rounded-0 form-control-md">
                </div>
            </div>
        </div>


</div>

        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('TransactionPage.infoButton')}} </router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>-->

                <router-link tag="button" :disabled="(!deedNo) || (!socialId)" 
                            
                             :class="(socialId && deedNo)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                             :to="{ name: 'inhaatdeeddetails', params: { 'deedno': this.deedNo, 'socialid': this.socialId } }">{{$t('attorneyPage.submitButton')}} </router-link>
                <a class="btn btn-outline-primary border-2 animated pulse infinite px-6"  @click="reset"> {{$t('attorneyPage.resetButton')}} </a>
            </div>
        </div>

        </div>
    </div>


</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import router from '../../router';
    //@Options({

    //})
    @Component
    export default class Attorney extends Vue {
        deedNo: string = '42501939';
        socialId: string = '1641646';
        trans!: any;
        created() {
            this.trans = localStorage.getItem("InahaatTitle");
            if (this.trans === undefined) {
                this.trans = "infoPage.inhaatDeed"
            }
        }
        reset() {
            this.deedNo = '';
            this.socialId = '';
        }
        submit() {
            if (this.deedNo && this.socialId) {
                //e.preventDefault();
                this.$router.push({ name: 'inhaatdeeddetails', params: { 'deedno': this.deedNo, 'socialid': this.socialId } })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
