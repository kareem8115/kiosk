import Vue from 'vue';
import App from './App.vue';
import router from "./router";
import { messages, defaultLocale } from "./i18n/index";
import VueI18n from 'vue-i18n';
import VueFilterDateFormat from 'vue-filter-date-format';
/*import JwPagination from 'jw-vue-pagination';*/
import JwPagination from './helper/JwPagination.vue';
import autofocus from "@vuejs-tips/v-autofocus";
import store from './Store';

Vue.component('jw-pagination', JwPagination);
//import Vuetify from 'vuetify';// path to vuetify export


//import "vuetify/dist/vuetify.min.css";
//Vue.use(Vuetify);


Vue.use(autofocus);

Vue.config.productionTip = true;
Vue.use(VueI18n);



Vue.use(VueFilterDateFormat);




// this is so you can access the current runtime environment by using process.env.NODE_ENV,
// to enable the webpack "process.env" plugin

const i18n = new VueI18n({
    /*dateTimeFormats,*/
    messages,
    locale: defaultLocale,
    fallbackLocale: defaultLocale,
    /*dateTimeFormats*/
});

new Vue({
    router,
    store,
    i18n,
    //bootstraper component
    render: h => h(App)
}).$mount('#app'); //is the place holder in the index page

