<template>
    <div class="col-12">
    
<div class="row">
        <div class="col-12 custom_height">
        <h2 class="text-pepper my-3">
            {{$t('jurLicenseDetailsPage.title')}}
        </h2>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading & !isNoData & !serviceUnavailable">
             <p>
                <b>{{$t('jurLicenseDetailsPage.Name')}}:</b>
                {{model.name}}
            </p>
            <p>
                <b>{{$t('jurLicenseDetailsPage.identityNo')}}:</b>
                {{model.identityNo}}
            </p>
            <p>
                <b>{{$t('jurLicenseDetailsPage.licenseType')}}:</b>
                {{model.licenseType}}
            </p>
              <p>
                <b>{{$t('jurLicenseDetailsPage.licenseIssueDateHijri')}}:</b>
                {{model.licenseIssueDateHijri}}
            </p>
             <p>
                <b>{{$t('jurLicenseDetailsPage.licenseIssueDateHijri')}}:</b>
                {{model.licenseIssueDateHijri}}
            </p>
            <p>
                <b>{{$t('jurLicenseDetailsPage.licenseExpDateHijri')}}:</b>
                {{model.licenseIssueDateHijri}}


            </p>
        </div>
        <p v-if="isNoData"> {{$t('jurLicenseDetailsPage.noData')}}</p>
         <p v-if="serviceUnavailable" style="color:red;"> {{$t('jurLicenseDetailsPage.serviceUnavailable')}}</p>
        </div>
        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >?????</a>-->
                <router-link :to="{path : '/jurLicense'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Details from './Details.vue'
    //import Attorney from '../components/Attorney.vue'
    import InformationService from '../Services/InformationService'
    import { HTTPStatusCode } from '../Enums/StatusCodeEnum'

    @Component({
        components: {
            Details
        }
    })
    export default class JurLicenseDetails extends Vue {
        qrCode: string = "";
        isLoading: boolean = true;
        isNoData = false;
        model!: any;
        serviceUnavailable = false;
        created() {
            this.GetJuridicalValidate();
        }
        public GetJuridicalValidate() {
            
            InformationService.GetJuridicalValidate(this.$route.params.licenseNumber, this.$route.params.personType).then(res => {
                console.log("native data from Juridical", res.data);

                if (res.data.statusCode === HTTPStatusCode.OK) {
                    this.isLoading=false;
                    this.model=res.data.model;
                }
                else if (res.data.statusCode === HTTPStatusCode.NotFound) {
                    this.isLoading=false;
                    this.isNoData = true;
                }
                else {
                    this.isLoading=false;
                    this.serviceUnavailable = true;
                }
            }).catch(error => {
                console.log(error);
            }).finally(() => {
                this.isLoading = false;
            });

        }

    }
</script>

<style>
</style>
