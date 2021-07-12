<template>
    <!--<div>-->
    <!--Hello from Info

    <router-link ref="link" :to="{path : '/attorney'}">attorney</router-link>-->
    <!-- Main layout -->



    <div class="col-12">




        <div class="row">
            <div class="col-12 custom_height">
                <div class="row">
                    <div class="col-12 my-3">
                        <h4 class="font-weight-bold m-0">
                            {{$t('infoPage.title')}}
                        </h4>
                    </div>

                    <div class="col-3 mb-3" v-for="item in pageOfItems" :key="item.id">
                        <a @click="goRoute(item.route,item.transalte)" class="btn btn-block btn-outline-primary border-2 pt-3 pb-2 px-1">
                            <!--<i class="fa fa-3x mb-1 d-block"></i>-->
                            <i :class="[item.icon,'fa fa-3x mb-1 d-block']"></i>
                            
                            <span class="text-pepper">  {{$t(item.transalte)}}</span>

                        </a>

                    </div>

                </div>

                <!--<Inhaat-Deed></Inhaat-Deed>-->
            </div>
            <div class="col-12 mt-1" id="footer">

                <jw-pagination :items="items" @changePage="onChangePage" :pageSize="8" :initialPage="1"></jw-pagination>

            </div>
        </div>



    </div>





</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import AuthService from '../Services/AuthService'
    import i18n from '@/i18n'
    import InhaatDeed from './InhaatDeeds/Main.vue'




    @Component({ components: { InhaatDeed } })
    export default class Information extends Vue {
        
        pageOfItems = [];
        ispageOfItems = false;
        items = [
            {
                "route": "attorney",
                "transalte": "infoPage.attorney",
                "icon":"icon-category_notary"


            }
            ,
            {
                "route": "marriage",
                "transalte": "infoPage.marriage"
                , "icon": "icon-category_licenses"
            }
            ,
            {
                "route": "deed",
                "transalte": "infoPage.realStateDeed"
                , "icon": "icon-category_real_estate"
            },
            {
                "route": "admission",
                "transalte": "infoPage.admission"
                ,"icon": "icon-numbers_98193"
                

            },
            {
                "route": "transaction",
                "transalte": "infoPage.transaction"
                , "icon": "icon-verifications_3"
            },
            {
                "route": "jurLicense",
                "transalte": "infoPage.mojlicense"
                , "icon": "icon-category_statistics"
            }
            
            ,

            {
                "route": "furijat",
                "transalte": "infoPage.furijatBills"
                , "icon": "icon-verifications_10"
            },


            {
                "route": "inhaatdeed",
                "transalte": "infoPage.inhaatDeed"
                , "icon": "icon-category_family"

            },
            {
                "route": "inhaatdeed",
                "transalte": "infoPage.EthbatZawaj"
                , "icon": "icon-category_family"
            },
            {
                "route": "inhaatdeed",
                "transalte": "infoPage.hasrWartha"
                , "icon": "icon-category_family"
            }
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatHadana"
            //    , "icon": "icon-category_family"

            //}
            //,
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatRagaa"
            //    , "icon": "icon-category_family"

            //},
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatMongez"
            //    , "icon": "icon-category_family"
            //},
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatWassiaZawjia"
            //    , "icon": "icon-category_family"
            //},
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatDokhol"
            //    , "icon": "icon-category_family"
            //},
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatTalaq"
            //    , "icon": "icon-category_family"
            //}
            //,
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.EthbatKholaa"
            //    , "icon": "icon-numbers_98193"
            //}
            //,
            //{
            //    "route": "inhaatdeed",
            //    "transalte": "infoPage.tawthiqRedaa"
            //    , "icon": "icon-category_family"
            //}
             
        ]

        constructor() {
            super();
            AuthService.GetToken();
            if (this.pageOfItems !== undefined) {
                this.ispageOfItems = true;

            }
            else
                this.ispageOfItems = false;

        }


        onChangePage(pageOfItems) {

            // update page of items
            this.pageOfItems = pageOfItems;
            console.log("onChangePage emitted", this.pageOfItems)
        }
        goRoute(url: string, trans: string) {
            if (url === 'inhaatdeed') {
                localStorage.setItem("InahaatTitle", trans);
                this.$router.push("/" + url)

            }
            else
                this.$router.push("/" + url)

        }


        //public async mounted() {
        //    console.log("Info mounted")
        //}

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
