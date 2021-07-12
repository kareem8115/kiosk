import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '*',
        component: () => import("../components/Home.vue"),
        name: 'home1'
    },
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: () => import("../components/Home.vue")
    },
    {
        path: "/test",
        alias: "/test",
        name: "test",
        component: () => import("../components/test.vue")
    },
    {
        path: "/inforoot",
        name: "inforoot",
        component: () => import("../components/InfoRoot.vue"),
        children: [
            {
                path: "/info",
                name: "info",
                component: () => import("../components/Information.vue")
            },
            {
                path: "/attorney",
                name: "attorney",
                component: () => import("../components/Attorney.vue")
            },
            {
                path: "/attorneyDetails/:attorneyNumber/:nationalId",
                name: "attorneyDetails",
                component: () => import("../components/AttorneyDetails.vue")
            },
            {
                path: "/marriage",
                name: "marriage",
                component: () => import("../components/Marriage.vue")
            },
            {
                path: "/marriageDetails/:contractNumber/:nationalId",
                name: "marriageDetails",
                component: () => import("../components/MarriageDetails.vue")
            }
            ,
            {
                path: "/deed",
                name: "deed",
                component: () => import("../components/Deed.vue")
            },
            {
                path: "/deedDetails/:deedNumber/:nationalId",
                name: "deedDetails",
                component: () => import("../components/DeedDetails.vue")
            }
            ,
            {
                path: "/admission",
                name: "admission",
                component: () => import("../components/Admission.vue")
            },
            {
                path: "/admissionDetails/:admissionNumber/:nationalId",
                name: "admissionDetails",
                component: () => import("../components/AdmissionDetails.vue")
            },

            {
                path: "/furijat",
                name: "furijat",
                component: () => import("../components/Furijat.vue")
            },
            {
                path: "/furijatDetails/:billNumber",
                name: "furijatDetails",
                component: () => import("../components/FurijatDetails.vue")
            },
            {
                path: "/transaction",
                name: "transaction",
                component: () => import("../components/Transactions/Main.vue")
            },
            {
                path: "/transaction/details/:transactionNumber/:transactionYear",
                name: "transactionDetails",
                component: () => import("../components/Transactions/Details.vue")
            },
            {
                path: "/inhaatdeed",
                name: "inhaatdeed",
                component: () => import("../components/InhaatDeeds/Main.vue")
            },
            {
                path: "/inhaatdeed/details/:deedno/:socialid",
                name: "inhaatdeeddetails",
                component: () => import("../components/InhaatDeeds/Details.vue")
            }
            ,
            {
                path: "/jurLicense",
                name: "jurLicense",
                component: () => import("../components/JurLicense.vue")
            },
            {
                path: "/jurLicenseDetails/:licenseNumber/:personType",
                name: "jurLicenseDetails",
                component: () => import("../components/JurLicenseDetails.vue")
            },
          
        ]
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../components/Dashboard/Index.vue"),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import("../components/Dashboard/Login/Login.vue")
            },
            {
                path: "/verification",
                name: "verification",
                component: () => import("../components/Dashboard/Verification/Main.vue")
            },
            {
                path: "/successverification",
                name: "successverification",
                component: () => import("../components/Dashboard/Verification/SuccessVerification.vue")
            },
        ]
        

    }




];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;