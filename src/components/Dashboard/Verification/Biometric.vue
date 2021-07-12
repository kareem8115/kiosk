<template>
<div class="col-12">
  <img src="/img/Biometric.png">
    <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/login'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" ><i class="fa mx-1 fa-arrow-right mb-1"></i>عوده
                 </router-link>
                 <router-link tag="button" :disabled="(!OTP)" :class="(OTP)?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'"
                             :to="{path:'/successverification'}">أرسال</router-link>
                              <a> </a>
            </div>
        </div>
</div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
    export default class BiometricVerification extends Vue {
        OTP:string='';
      
    }
</script>