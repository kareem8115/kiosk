<template>
    <div>
        <header class="bg-header w-100">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-11 col-xxl-10 col-xl-9">
                        <div class="row">
                            <div class="col-12">
                                <a  class="header__logoLink">
                                    <img src="/img/logo.svg" alt="najiz" width="150" class="my-2">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <main>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-11 col-xxl-10 col-xl-9">
                        <div class="row">
                            <router-view >
  </router-view>
                        </div>
                    </div>
                </div>
            </div>
        </main>



    </div>  
</template>
<style>

</style>