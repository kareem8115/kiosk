<template>
    <div class="col-12">
    
<div class="row">
        <div class="col-12 custom_height">
        <!--<router-link ref="link" :to="{path : '/Home'}">Home</router-link>-->
        <h2 class="text-pepper my-3">
            {{msg}}
        </h2>
        <div v-if="isLoading" class="loader"></div>
        <div v-if="!isLoading & !isNoData" >
            <img class="center" v-if="!isLoading" v-bind:src="'data:image/png;base64,' + qrCode" alt="qrcode" width="250" />
        </div>
        <p v-if="isNoData"> {{$t('detailsPage.noData')}}</p>
        </div>

        <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/info'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" >{{$t('detailsPage.infoButton')}}</router-link>
                <!--<a class="btn btn-primary btn-rounded animated pulse infinite px-6" >موافق</a>-->
                <router-link :to="{path : '/attorney'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6">{{$t('detailsPage.resetButton')}}</router-link>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class Details extends Vue {
        @Prop() private msg!: string;
        @Prop() private qrCode!: string;
        @Prop() private isLoading: boolean = true;
        @Prop() private isNoData: boolean = false;



    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .center {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
        margin-bottom: 49px;
    }
</style>
