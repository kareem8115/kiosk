<template>
<div class="col-12">
<AbsherVerification v-if="isAbsher"></AbsherVerification>
<biometric-verification v-if="!isAbsher"></biometric-verification>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import store from "../../../Store/index";
import AbsherVerification from "./Absher.vue";
import BiometricVerification from "./Biometric.vue";
  @Component({
        components: {
            AbsherVerification,
           BiometricVerification
        }
    })
    export default class Main extends Vue {
        isAbsher:boolean=false;
        authenticationType:string='absher'
       mounted()
       {
           this.authenticationType=store.getters["auth/getAuthenticationType"];
           this.isAbsher=this.authenticationType==='Absher'?true:false;
           console.log(this.authenticationType);
       }
    }
</script>