<template>
    <div class="col-12">

        <div class="row">
            <div class="col-12 custom_height">

                <h2 class="text-pepper my-3">
                    {{$t('transactionDetailsPage.title')}}
                </h2>
                <div v-if="isLoading" class="loader"></div>


                <div v-if="!isLoading & !isNoData">
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.transactionNumberLabel')}}:</b>
                            {{model.transactionNumber}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.statusLabel')}}:</b>
                            {{model.status}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.transactionTypeLabel')}}:</b>
                            {{model.transactionType}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.sourceTypeLabel')}}:</b>
                            {{model.sourceType}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.transactionYearLabel')}}:</b>
                            {{model.dateH}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.currentDepartmentLabel')}}:</b>
                            {{model.currentOrgUnit}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.inboundDocumentNumber')}}:</b>
                            {{model.inboundDocumentNumber}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.inboundDateH')}}:</b>
                            {{model.inboundDateH}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.attachments')}}:</b>
                            {{model.attachments}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.attachments')}}:</b>
                            {{model.attachments}}
                        </p>
                    </div>
                    <div class="col-6">
                        <p>
                            <b>{{$t('transactionDetailsPage.remarks')}}:</b>
                            {{model.remarks}}
                        </p>
                    </div>
                </div>

                <p v-if="isNoData&& !isLoading"> {{$t('transactionDetailsPage.noData')}}</p>
            </div>
            <div class="col-12 mt-1" id="footer">
                <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                    <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                    <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >موافق</a>-->
                    <router-link :to="{path : '/transaction'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import InformationService from '../../Services/InformationService'

    @Component({
        components: {

        }
    })
    export default class MorasalatDetails extends Vue {
        statuscode: number = 0;
        isLoading: boolean = true;
        isNoData: boolean = true;
        model!: {
            transactionNumber: string;
            inboundDocumentNumber: string;
            transactionType: string;
            inboundDateH: string;
            currentOrgUnit: string;
            remarks: string;
            sourceType: string;
            dateH: string;
            status: string;
            attachments: string;
            links: string;

        }
        created() {
            this.getMorasalat();
        }
        public getMorasalat() {
            //debugger;
            InformationService.GetMorasalat(this.$route.params.transactionNumber, this.$route.params.transactionYear).then(res => {
                if (res.data.statusCode === 0) {
                    this.isNoData = false;
                    this.model = res.data.result;
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
