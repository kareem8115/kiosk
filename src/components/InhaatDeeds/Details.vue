<template>
    <div class="col-12">

        <div class="row">
            <div class="col-12 custom_height">
                <h2 class="text-pepper my-3">
                    {{$t('inhaatDeedDetailsPage.title')}} {{$t(trans)}}
                </h2>
                <div v-if="isLoading" class="loader"></div>

                <div v-if="!isLoading & !isNoData">
                    <p>
                        <b>{{$t('inhaatDeedDetailsPage.deedNoLabel')}}:</b>
                        {{this.$route.params.deedno}}
                    </p>
                    <div class="col-12" v-for="deed in requestInfoModels" :key="deed.requestId">
                        <p>
                            <b>{{$t('inhaatDeedDetailsPage.statusLabel')}}:</b>
                            {{deed.documentStatusName}}
                        </p>
                        <p>
                            <b>{{$t('inhaatDeedDetailsPage.documentationType')}}:</b>
                            {{deed.documentTypeName}}
                        </p>
                        <p>
                            <b>{{$t('inhaatDeedDetailsPage.documentationDate')}}:</b>
                            {{deed.deedDateHijri}}
                        </p>
                        <p>
                            <b>{{$t('inhaatDeedDetailsPage.beneficiaryNameLabel')}}:</b>
                            {{deed.model.fullName}}
                        </p>
                        <p>
                            <b>{{$t('inhaatDeedDetailsPage.centerNameLabel')}}:</b>
                            {{deed.courtName}}
                        </p>
                        <div class="row" v-if="deed.documentTypeId==2">
                            <div class="col-12">
                                <p><b>{{$t('inhaatDeedDetailsPage.DeceasedData')}}:</b></p>
                            </div>
                            <div class="col-12">
                                <p>{{deed.model.deceased.fullName}}</p>
                            </div>
                            <div class="col-4">
                                <p>
                                    <b>{{$t('inhaatDeedDetailsPage.NationalId')}}:</b>
                                    {{deed.model.deceased.socialId}}
                                </p>
                            </div>
                            <div class="col-4">
                                <p>
                                    <b>{{$t('inhaatDeedDetailsPage.Nationaility')}}:</b>
                                    {{deed.model.deceased.country}}
                                </p>
                            </div>
                            <div class="col-4">
                                <p>
                                    <b>{{$t('inhaatDeedDetailsPage.DOB')}}:</b>
                                    {{deed.model.deceased.dateOfBirthHijri}}
                                </p>
                            </div>
                            <div class="col-12">
                                <p><b>{{$t('inhaatDeedDetailsPage.HeirsData')}}({{deed.model.heirs.length}}):</b></p>
                            </div>
                            <div class="row" v-for="heir in deed.model.heirs" :key="heir.socialId" >
                                <div class="col-12">
                                    <p>
                                        <b>{{heir.relationToDeceasedName}}</b>
                                        {{heir.fullName}}
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p>
                                        <b>{{$t('inhaatDeedDetailsPage.NationalId')}}:</b>
                                        {{heir.socialId}}
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p>
                                        <b>{{$t('inhaatDeedDetailsPage.Nationaility')}}:</b>
                                        {{heir.country}}
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p>
                                        <b>{{$t('inhaatDeedDetailsPage.DOB')}}:</b>
                                        {{heir.dateOfBirthHijri}}
                                    </p>
                                </div>
                                <div class="col-3">
                                    <p>
                                        <b>{{$t('inhaatDeedDetailsPage.HeirStatus')}}</b>
                                        {{heir.statusName}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <p v-if="isNoData&& !isLoading"> {{$t('transactionDetailsPage.noData')}}</p>
            </div>
            <div class="col-12 mt-1" id="footer">
                <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                    <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                    <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >موافق</a>-->
                    <router-link :to="{path : '/inhaatdeed'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
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
    export default class InhaatDeedsDetails extends Vue {
        isLoading= true;
        isNoData= true;

        responseStatus!: {
            ResponseCode: number;
            responseMessage: string;
            referenceId: string;
        };
        requestInfoModel!: {
            requestId: number;
            requestCode: number;
            judgeId: number;
            judgeName: string;
            deedDate: Date;
            deedDateHijri: string;
            courtId: number;
            courtName: string;
            officeNo: number;
            officeName: string;
            documentTypeId: number;
            documentTypeName: string;
            documentStatusId: number;
            documentStatusName: string;
        };
        requestInfoModels: any[] = [];

        trans!: any;
        created() {
            this.trans = localStorage.getItem("InahaatTitle");
            if (this.trans === undefined) {
                this.trans = "infoPage.inhaatDeed"
            }
            this.getInhaatDeed();
        }
        public getInhaatDeed() {
            //debugger;
            InformationService.GetInhaatDeed(this.$route.params.deedno, this.$route.params.socialid).then(res => {
                if (res.data.responseStatus.responseCode === 1) {
                    this.isNoData = false;
                    this.requestInfoModels = res.data.requestInfoModels;
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
