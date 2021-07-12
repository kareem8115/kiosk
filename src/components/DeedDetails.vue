<template>
    <div class="col-12">
    
<div class="row">
        <div class="col-12 custom_height">
        <h2 class="text-pepper my-3">
            {{$t('deedDetailsPage.title')}}
        </h2>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading & !isNoData">

            <p>
                <b>{{$t('deedDetailsPage.numberLabel')}}:</b>
                {{this.$route.params.deedNumber}}


            </p>
            <p>
                <b>{{$t('deedDetailsPage.deedStatusLabel')}}:  </b>

                <b v-if="isValid" style="color:green">{{model.deedStatus.label}} </b>
                <b v-if="!isValid" style="color:red">{{model.deedStatus.label}}</b>

            </p>
            <p v-if="!isNoReason">
                <b>{{$t('deedDetailsPage.reasonLabel')}}:</b>

                {{model.deedStatus.reason.label}}

            </p>
            <p>
                <b>{{$t('deedDetailsPage.realStateStatusLabel')}}:</b>

                {{model.containerStatus.label}}

            </p>
        </div>
        <p v-if="isNoData"> {{$t('deedDetailsPage.noData')}}</p>

        </div>


            <div class="col-12 mt-1" id="footer">
                <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                    <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                    <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >موافق</a>-->
                    <router-link :to="{path : '/deed'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
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

    @Component({
        components: {
            Details
        }
    })
    export default class DeedDetails extends Vue {
        qrCode: string = "";
        isLoading: boolean = true;
        isNoData = false;
        isValid: boolean = true;
        isNoReason: boolean=true;
        model!: {
            deedStatus: {
                code: number,
                label: string,
                reason: {
                    code: number,
                    label: string,
                }
            },
            containerStatus: {
                code: number,
                label: string
            }
        }
        constructor() {
            super();
           
           
        }
        created() {
            this.getDeed();
        }
        public getDeed() {
            //debugger;
            InformationService.GetDeedShamil(this.$route.params.deedNumber, this.$route.params.nationalId).then(res => {
                console.log(res.data);
                if (res.data.httpCode != 200) {
                    this.isNoData = true;
                }
                else {
                    this.qrCode = res.data.qrCode;
                    //this.deedStatus = res.data.data.deedStatus.label;
                    this.model = res.data.data;
                    if (this.model.deedStatus.label === "غير فعال") {
                        this.isValid = false;
                        console.log(this.isValid);

                    }
                  
                    if (this.model.deedStatus.reason.label !== "") {
                        this.isNoReason = false;
                    }
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
