<template>
    
        <Details :msg="$t('detailsPage.attorneyMessage')" :qrCode="qrCode" :isLoading="isLoading" :isNoData="isNoData"></Details>
        
    
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
    export default class AttorneyDetails extends Vue {
        qrCode: string = "";
        attorneyText: string = '';
        firstParty: string = '';
        secondParty: string = '';
        isLoading: boolean = true;
        isNoData = false;
        serviceUnavailable = false;
        created() {
            this.getAttorney();
        }
        public getAttorney() {
            //debugger;
            InformationService.GetAttorney(this.$route.params.attorneyNumber, this.$route.params.nationalId).then(res => {
                if (res.data.statusCode === HTTPStatusCode.OK) {
                    this.qrCode = res.data.qrCode;
                }
                else if (res.data.statusCode === HTTPStatusCode.NotFound) {
                    this.isNoData = true;
                }
                else {
                    this.serviceUnavailable = true;
                }
                //console.log(res.data.model)
                //this.attorneyText = res.data.model.attorneyText;
                //this.firstParty = res.data.model.firstParties[0].fullName;
                //this.secondParty = res.data.model.secondParties[0].fullName;
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
