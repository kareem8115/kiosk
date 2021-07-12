<template>
    <div class="col-12">

    
<div class="row">
        <div class="col-12 custom_height">
        <h2 class="text-pepper my-3">
            {{$t('MarriagDetailsPage.title')}}
        </h2>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading & !isNoData">

            <p>
                <b>{{$t('MarriagDetailsPage.contractCodeLabel')}}:</b>
                {{this.$route.params.contractNumber}}


            </p>
            <p>
                <b>{{$t('MarriagDetailsPage.identityLabel')}}:</b>
                {{this.$route.params.nationalId}}


            </p>
            <p>
                <b>{{$t('MarriagDetailsPage.contractStatusLabel')}}:  </b>
                {{model.documentStatusName}}


            </p>
            <p>
                <b>{{$t('MarriagDetailsPage.courtLabel')}}:  </b>
                {{model.courtName}}


            </p>
           
            <p>
                <b>{{$t('MarriagDetailsPage.approveDateLabel')}}:  </b>
                {{model.deedDateHijri}}


            </p>
            
            <p>
                <b>{{$t('MarriagDetailsPage.husbandNameLabel')}}:</b>

                {{model.model.husband.fullName  }}

            </p>
            <p>
                <b>{{$t('MarriagDetailsPage.husbandIdLabel')}}:</b>

                {{model.model.husband.socialId  }}

            </p>
            <p>
                <b>{{$t('MarriagDetailsPage.wifeNameLabel')}}:</b>

                {{model.model.wife.fullName  }}

            </p>
            <p>
                <b>{{$t('MarriagDetailsPage.wifeIdLabel')}}:</b>

                {{model.model.wife.socialId  }}

            </p>

        </div>
        <p v-if="isNoData"> {{$t('MarriagDetailsPage.noData')}}</p>


        </div>
        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >?????</a>-->
                <router-link :to="{path : '/marriage'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
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
    import { MarriageModel } from '../Models/MarriageModel';

    @Component({
        components: {
            Details
        }
    })
    export default class MarriageDetails extends Vue {
        qrCode: string = "";
        isLoading: boolean = true;
        isNoData = false;
        model!: MarriageModel;
        serviceUnavailable = false;
        created() {
            this.getContract();
        }
        public getContract() {
            
            InformationService.GetMarriage(this.$route.params.contractNumber, this.$route.params.nationalId).then(res => {
                console.log("native data from admission", res.data);
               
                if (res.data.statusCode === HTTPStatusCode.OK) {
                    this.model = res.data.requestInfoModels[0];
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
