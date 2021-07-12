<template>

    <div class="col-12">
        <div class="row">
            <div class="col-12 custom_height">
                <!--<a href="/details" @click="getAttorney">details</a>-->

                <h2 class="text-pepper font-weight-bold my-3">
                    {{$t('TransactionPage.title')}}
                </h2>

                <h4 class="text-secondary font-weight-bold my-3">
                    {{$t('TransactionPage.subTitle')}}
                </h4>
                <div class="form-row" @keyup.enter="submit">

                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="inputEmail4">{{$t('TransactionPage.TransactionIdlabel')}}</label>
                            <input v-autofocus v-model="transactionNumber" type="number" :placeholder="$t('TransactionPage.TransactionIdPlaceholder')" class="form-control rounded-0 form-control-md">
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <div class="form-group">
                            <label for="inputEmail4">{{$t('TransactionPage.TransactionYearLabel')}}</label>
                            <input v-model="transactionYear" type="number" :placeholder="$t('TransactionPage.TransactionYearLabel')" class="form-control rounded-0 form-control-md">
                        </div>
                    </div>
                </div>
            </div>



            <div class="col-12 mt-1" id="footer">
                <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                    <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('TransactionPage.infoButton')}} </router-link>
                    <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" @click="getAttorney">استعلام</a>-->

                    <router-link tag="button" :disabled="(!transactionNumber) || (!transactionYear)"
                                 :class="(transactionNumber)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                                 :to="{ name: 'transactionDetails', params: { 'transactionNumber': this.transactionNumber, 'transactionYear': this.transactionYear } }">{{$t('attorneyPage.submitButton')}} </router-link>
                    <a class="btn btn-outline-primary border-2 animated pulse infinite px-6" @click="reset"> {{$t('attorneyPage.resetButton')}} </a>
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
        transactionNumber: string = '419658753';
        transactionYear: string = '1441';
        reset() {
            this.transactionNumber = '';
            this.transactionYear = '';
        }
        submit() {
            if (this.transactionNumber && this.transactionYear) {
                //e.preventDefault();
                this.$router.push({
                    name: 'transactionDetails',
                    params: {
                        'transactionNumber': this.transactionNumber,
                        'transactionYear': this.transactionYear
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
