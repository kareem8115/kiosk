<template>
    <div class="col-12">

        <div class="row">
            <div class="col-12 custom_height">
                <!--<a href="/details" @click="getAttorney">details</a>-->
                <h2 class="text-pepper font-weight-bold my-3">
                    {{$t('jurLicensePage.title')}}
                </h2>
                <h4 class="text-secondary my-3">
                    {{$t('jurLicensePage.subTitle')}}
                </h4>



                <!--<div class="form-group">-->
                <label for="inputEmail4">{{$t('jurLicensePage.licenseTypeLabel')}}</label>
                <!--<input v-model="contractNumber" type="number" :placeholder="$t('attorneyPage.attorneylabel')" class="form-control rounded-0 form-control-md">-->

                <ul class="nav nav-pills custom-nav-pills nav-fill flex-column flex-md-row mb-3 fix_nav" id="pills-tab" role="tab">
                    <li class="nav-item" role="presentation">
                        <a @click="getPersonType(1)" :class="(personType===1)?'active nav-link':'nav-link'" id="pills-home-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-home" aria-selected="true">{{$t('jurLicensePage.lawyerButtonLabel')}}</a>
                    </li>
                    <li class="nav-item " role="presentation">
                        <a @click="getPersonType(2)" :class="(personType===2)?'active nav-link':'nav-link'" id="pills-profile-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-profile" aria-selected="false">{{$t('jurLicensePage.traineeButtonLabel')}}</a>
                    </li>
                    <li class="nav-item " role="presentation">
                        <a @click="getPersonType(3)" :class="(personType===3)?'active nav-link':'nav-link'" id="pills-contact-tab" data-toggle="pill" href="" role="tab" aria-controls="pills-contact" aria-selected="false">{{$t('jurLicensePage.pleadButtonLabel')}}</a>
                    </li>
                </ul>



                <div class="form-row" @keyup.enter="submit">
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="inputEmail4">{{$t('jurLicensePage.licenseNumLabel')}}</label>
                            <input v-autofocus v-model="licenseNumber" type="number" :placeholder="$t('jurLicensePage.licenseNumLabel')" class="form-control rounded-0 form-control-md">
                        </div>
                    </div>
                </div>



            </div>
            <div class="col-12 mt-1" id="footer">
                <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                    <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('jurLicensePage.infoButton')}} </router-link>
                    <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>-->

                    <router-link tag="button" :disabled="!licenseNumber"
                                 :class="(licenseNumber)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                                 :to="{ name: 'jurLicenseDetails', params: { 'licenseNumber': this.licenseNumber, 'personType': this.personType } }">{{$t('jurLicensePage.submitButton')}} </router-link>
                    <a class="btn btn-outline-primary border-2 animated pulse infinite px-6" @click="reset"> {{$t('jurLicensePage.resetButton')}} </a>
                </div>
            </div>
        </div>
    </div>



</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import router from '../router';
    import { personTypeEnum } from '../Enums/personTypeEnum'

    //@Options({

    //})
    @Component
    export default class JurLicense extends Vue {
        licenseNumber: string = '';
        personType: personTypeEnum = personTypeEnum.Lawyer;

        reset() {
            this.licenseNumber = '';
            this.personType = personTypeEnum.Lawyer

        }
        getPersonType(pType: personTypeEnum) {

            this.personType = pType;
        }
        submit() {
            if (this.licenseNumber) {
                //e.preventDefault();
                this.$router.push({
                    name: 'jurLicenseDetails',
                    params:
                    {
                        'licenseNumber': this.licenseNumber,
                        'personType': this.personType?.toString()
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
