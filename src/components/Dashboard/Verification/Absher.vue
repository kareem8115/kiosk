<template>
<div class="col-12">
     <h2 class="text-pepper font-weight-bold my-3">
               التحقق بواسطة خدمة ابشر
      </h2>
  <div class="form-row">
       <div class="col-lg-4 col-md-4">
       </div>
     <div class="col-lg-4 col-md-4">
          <div class="form-group">
                    <label for="OTP" class="text-primary" style="font-size: 25px;">فضلا ادخل رمز التحقق المرسل على الجوال</label>
                    <input v-model="OTP"  type="number" placeholder="0000" class="form-control rounded-0 form-control-md" style="text-align:center;">
                </div>
    </div>
    <div class="col-lg-4 col-md-4">
       </div>
</div>
<div class="form-row">
    <div class="col-lg-4 col-md-4">
    </div>
      <div class="col-lg-4 col-md-4" style="text-align:center;">
             <router-link  :to="{  }" class="text-pepper" style="font-size: 25px;">اعادة ارسال الرسالة</router-link> 
    </div>
      <div class="col-lg-4 col-md-4">
         
    </div>
</div>
<br/>
<br/>
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
    export default class AbsherVerification extends Vue {
        OTP:string='';
      
    }
</script>