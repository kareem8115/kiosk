<template>
    <!--<Details :isNoData="isNoData" :msg="$t('detailsPage.marriageMessage')" :qrCode="qrCode" :isLoading="isLoading"></Details>-->
    <div class="col-12">
    
<div class="row">
        <div class="col-12 custom_height">
        <h2 class="text-pepper my-3">
            {{$t('AdmissionDetailsPage.title')}}
        </h2>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading & !isNoData">

            <p>
                <b>{{$t('AdmissionDetailsPage.admissionCodeLabel')}}:</b>
                {{this.$route.params.admissionNumber}}


            </p>
            <p>
                <b>{{$t('AdmissionDetailsPage.identityLabel')}}:</b>
                {{this.$route.params.nationalId}}


            </p>
            <p>
                <b>{{$t('AdmissionDetailsPage.admissionStatusLabel')}}:  </b>
                <b >{{model.statusName}} </b>
                <!--<b v-if="isValid" style="color:green">{{model.StatusName}} </b>
    <b v-if="!isValid" style="color:red">{{model.StatusName}}</b>-->

            </p>
            <p>
                <b>{{$t('AdmissionDetailsPage.validityLabel')}}:  </b>
                <b  >{{model.validity}} </b>
                <!--<b v-if="isValid" style="color:green">{{model.Validity}} </b>
    <b v-if="!isValid" style="color:red">{{model.Validity}}</b>-->

            </p>
            <p>
                <b>{{$t('AdmissionDetailsPage.issueGregLabel')}}:</b>

                {{model.issueHijriDate  }}

            </p>
            <p>
                <b>{{$t('AdmissionDetailsPage.admissionTypeLabel')}}:</b>

                {{model.typeName}}

            </p>
            <p>
                <b>{{$t('AdmissionDetailsPage.placeNameLabel')}}:</b>

                {{model.placeName}}

            </p>
            
        </div>
        <p v-if="isNoData"> {{$t('AdmissionDetailsPage.noData')}}</p>
        </div>
        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >?????</a>-->
                <router-link :to="{path : '/admission'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
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
    import { AdmissionModel } from '../Models/AdmissionModel';
    import { HTTPStatusCode } from '../Enums/StatusCodeEnum'

    @Component({
        components: {
            Details
        }
    })
    export default class AdmissionDetails extends Vue {
        qrCode: string = "";
        isLoading: boolean = true;
        isNoData = false;
        serviceUnavailable = false;
        model!: AdmissionModel;
        created() {
            this.getAdmission();
        }
        public getAdmission() {
            InformationService.GetAdmission(this.$route.params.admissionNumber, this.$route.params.nationalId).then(res => {
                console.log("native data from admission", res.data);
                //debugger;
                if (res.data.statusCode === HTTPStatusCode.OK) {
                    this.model = res.data.results[0];
                    console.log("model: ", this.model)
                }
                else if (res.data.statusCode === HTTPStatusCode.NotFound) {
                    this.isNoData = true;
                }
                else {
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
