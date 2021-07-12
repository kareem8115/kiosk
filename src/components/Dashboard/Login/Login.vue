<template>
<div class="col-12">
     <h2 class="text-pepper font-weight-bold my-3">
               تسجيل دخول
            </h2>
  <div class="form-row">
     <div class="col-lg-6 col-md-6">
          <div class="form-group">
                    <label for="IdentityNo">رقم الهوية</label>
                    <input v-model="IdentityNo"  type="number" placeholder="رقم الهوية" class="form-control rounded-0 form-control-md">
                </div>
    </div>
    <div class="col-lg-2 col-md-2">
         <div class="form-group">
                    <label for="Day">اليوم</label>
                    <input v-model="Day"  type="number" placeholder="اليوم" class="form-control rounded-0 form-control-md">
                </div>
    </div>
     <div class="col-lg-2 col-md-2">
         <div class="form-group">
                    <label for="Month">الشهر</label>
                    <input v-model="Month"  type="number" placeholder="الشهر" class="form-control rounded-0 form-control-md">
                </div>
    </div>
     <div class="col-lg-2 col-md-2">
         <div class="form-group">
                    <label for="Year">السنة</label>
                    <input v-model="Year"  type="number" placeholder="السنة" class="form-control rounded-0 form-control-md">
                </div>
    </div>
</div>
<br/>
<div class="form-row">
    <div class="col-lg-1 col-md-1">
    </div>
      <div class="col-lg-5 col-md-5">
             <button
             :disabled="isValid" :class="!isValid?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'" 
            @click="onBiometricClick"><i class="fa mx-1 icon-verifications"></i>الدخول بواسطة البصمه
             </button> 
    </div>
      <div class="col-lg-6 col-md-6">
          <button :disabled="isValid" 
          :class="!isValid?'animate__animated animate__pulse animate__infinite btn btn-primary btn-rounded px-6':'btn btn-primary btn-rounded px-6'" 
           @click="onAbsherClick"> <i class="fa mx-1 fa-info mb-1"></i>الدخول بواسطة رمز التحقق-أبشر
            </button>
    </div>
</div>
<br/>

    <div class="col-12 mt-1" id="footer">
            <div class="d-flex justify-content-between py-3" style="border-top: 2px solid #e0cf97;">
                <router-link :to="{path : '/'}" class="btn btn-outline-primary border-2 animated pulse infinite px-6" ><i class="fa mx-1 fa-home mb-1"></i>الرئيسيه
                 </router-link>
              
            </div>
        </div>
</div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import store from "../../../Store/index"
  @Component
    export default class Login extends Vue {
        IdentityNo='';
        Day='';
        Month='';
        Year='';
        onAbsherClick()
        {
            store.dispatch('auth/absherAuthenticate');
            this.$router.push({ path: 'verification' });
        }
          onBiometricClick()
        {
            store.dispatch('auth/biometricAuthenticate');
            this.$router.push({ path: 'verification' });
        }
        get isValid():boolean
        {
            if((!this.IdentityNo)||(!this.Day)||(!this.Month)||(!this.Year))
            {
             return true;
            }
            else
            {
                return false;
            }
        }
    }
</script>