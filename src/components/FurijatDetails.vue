<template>
    <div class="col-12">
    

<div class="row">
        <div class="col-12 custom_height">
    
        <h2 class="text-pepper my-3">
            {{$t('FurijatBillDetailsPage.title')}}
        </h2>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading & !isNoData">

            <p>
                <b>{{$t('FurijatBillDetailsPage.BillNumberLabel')}}:</b>
                {{this.$route.params.billNumber}}


            </p>
            <p>
                <b>{{$t('FurijatBillDetailsPage.BillStatusLabel')}}:  </b>

                <b v-if="isValid" style="color:green">{{model.billStatusDesc}} </b>
                <b v-if="!isValid" style="color:red">{{model.billStatusDesc}}</b>

            </p>
            <p>
                <b>{{$t('FurijatBillDetailsPage.BillDueAmountLabel')}}:</b>

                {{model.billDueAmount}}

            </p>
            <p>
                <b>{{$t('FurijatBillDetailsPage.BillPaidAmountLabel')}}:</b>

                {{model.billPaidAmount}}

            </p>
        </div>
        <p v-if="isNoData"> {{$t('FurijatBillDetailsPage.noData')}}</p>
</div>


        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >موافق</a>-->
                <router-link :to="{path : '/furijat'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
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
    export default class FurijatDetails extends Vue {
        qrCode: string = "";
        isLoading: boolean = true;
        isNoData = true;
        isValid: boolean = true;
        isNoReason: boolean = true;
        model!: {
            billStatus: number,
            billStatusDesc: string,
            billNumber: string,
            socialId: string,
            requestNumber: number,
            billDueAmount: number,
            billPaidAmount: number,
            noOfSadadNotifications: number
        }
        constructor() {
            super();


        }
        created() {
            this.getDeed();
        }
        public getDeed() {
            //debugger;
            InformationService.GetFurijat(this.$route.params.billNumber).then(res => {
                console.log(res.data);
                if (res.data.statusCode === 200) {
                   
                    this.isNoData = false;
                    this.qrCode = res.data.qrCode;
                    //this.deedStatus = res.data.data.deedStatus.label;
                    this.model = res.data;

                    if (this.model.billStatus !== 1) {
                        this.isValid = false;


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
