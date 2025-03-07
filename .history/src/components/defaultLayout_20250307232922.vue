<template>
  <div class="background-cover">
    <header style="width: 100%;margin-left: auto; margin-right: auto;direction: rtl;padding-bottom: 120px !important;"
      class="main">
      <v-row no-gutters style="background-color: white;">
        <v-col cols="12" md="12" class="d-flex">
          <v-col cols="6" class="">
            <v-tabs v-model="tab" align-tabs="center" color="black" class=" ">
              <v-tab :value="1" class="mr-2" style="font-size: 10px;color: black;font-weight: bold;">home</v-tab>
              <!-- <v-tab :value="2" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">درباره من</v-tab> -->
              <v-tab :value="3" class="mr-2" style="font-size: 10px;color: black;font-weight: bold;">skills</v-tab>
              <v-tab :value="4" class="mr-2" style="font-size: 10px;color: black;font-weight: bold;"> resume

              </v-tab>
              <!-- <v-tab :value="5" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;"> رزومه </v-tab> -->
              <v-tab :value="5" class="mr-2" style="font-size: 10px;color: black;font-weight: bold;"> contact me
              </v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="6" md="6" class="text-left">
            <p>some thing</p>
          </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters class="mt-10" justify="end">
        <v-col cols="6" md="6" class="mr-5  ml-10" style="margin-left: 100px !important;">
          <p class="text-left" style="color: #FDC435;font-weight: bold;">frontEnd Developer</p>
          <h1 class="text-left" style="font-size: 50px;word-spacing: 8px; color: black;">Hello, my name is</h1>
          <h1 class="text-left mb-5" style="font-size: 50px;word-spacing: 8px; color: black;">Mobina Zarein</h1>
          <p style="width: 70%;float: left;color: gray;" class="text-left">Hi! I'm Mobina, a front-end developer
            who loves creating
            beautiful and efficient user interfaces with Vue.js.. I'm always learning and taking on new challenges. Glad
            you're here!</p>
          <v-btn>resume</v-btn>
          <v-btn>resume</v-btn>
        </v-col>
      </v-row>
    </header>
    <!-- <transition name="fade" mode="out-in"> -->
    <div :key="tab" style="background-color: #f5f6f8;">
      <div v-if="tab === 1" style="background-color: #f5f6f8;">
        <div style="background-color: #f5f6f8;">
          <v-card style="background-color: #f5f6f8;">
            <v-row no-gutters class="mt-10 text-right">
              <v-col md="12" class="text-right ">
                <div class="text-right ">
                  <v-card-title style="font-size: 40px; border-bottom: 1PX dashed #f5f6f8; " class="mb-10 mr-10 ml-10">
                    :
                    مهارت
                    ها</v-card-title>
                  <p style="font-size: 25px; direction: ltr !important;text-align: left" class="ml-10">Html , Css ,
                    JavaScript , VueJs
                    ,
                    Nuxt js ,
                    Sass , Vuetify ,
                    Composition Api
                    , Pinia , Store , Git Hub
                    , Axios , SOLID , Vuex , Tailwind css </p>
                </div>
                <v-btn color="#2E3105" style="float: left;text-align: center; height: 50px;width: 190px;"
                  @click="tab = 3" class="ma-10">view more
                  ...</v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card style="background-color: #f5f6f8;">
            <v-row>
              <v-col md="12" class="text-right" style=" border-bottom: 1PX dashed #f5f6f8;">
                <v-card-title style="font-size: 40px; border-bottom: 1PX dashed #FFFDC1;" class="pa-5 ml-10 mr-10"> :
                  نمونه کار
                  ها</v-card-title>
                <div class="d-flex  justify-end" style=" ">
                  <p style="font-size: 20px;" class="mr-10 mt-5 ">
                    نرم افزار تحت وب پیشروپلاس
                  </p>
                  <p style="font-size: 20px;" class="mr-10 mt-5 ">
                    نرم افزار تحت وب فرم استخدام
                  </p>
                  <p style="font-size: 20px;" class="mr-10 mt-5 ">
                    نرم افزار تحت وب پیشروپلاس تیکت
                  </p>
                  <p style="font-size: 25px;" class="ml-10 mt-5 mr-10">: شرکت پویان
                    سیستم </p>
                </div>
                <div class="d-flex justify-end ">
                  <p style="font-size: 20px;" class="mr-10 mt-5 ">
                    نرم افزار تحت وب کسبوداد
                  </p>
                  <p style="font-size: 25px;margin-left: 90px !important;" class="ml-10 mt-5 mr-10">: شرکت
                    کسبوداد </p>
                </div>
                <div class="d-flex justify-end ">
                  <p style="font-size: 20px;" class="mr-10 mt-5 ">
                    نرم افزار تحت وب تینکست
                  </p>
                  <p style="font-size: 25px;margin-left: 80px !important;" class="ml-10 mt-5 mr-10">: شرکت
                    نارون آریا </p>
                </div>
                <v-btn color="#DFE777" style="float: left;text-align: center; height: 50px;width: 190px;"
                  @click="tab = 4" class="ml-10 mb-10">view more
                  ...</v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card style="background-color: #f5f6f8;">
            <v-row no-gutters class=" text-right">
              <v-col md="12" class="text-right  pa-10  mb-10">
                <!-- <p style="font-size: 30px; margin-left: 220px !important;" class="ml-10 ">
                php , figma , wordpress , prestashop , c# , ReactJs</p> -->
                <v-card-title style="font-size: 40px; "> ... ارتباط با من</v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </div>

      </div>
      <div v-if="tab === 4">
        <div>
          <v-card>
            <v-row>
              <v-col md="12" class="text-right" style=" border-bottom: 1PX dashed #f5f6f8;">
                <v-card-title style="font-size: 40px; " class="mt-5"> : نمونه کار ها</v-card-title>
                <div class="d-flex justify-end">
                  <p style="font-size: 35px; margin-left: 220px !important;" class="ml-10 mt-5">: برنامه نویس شرکت پویان
                    سیستم ( اردیبهشت 1403 _ مهر 1403) </p>
                  <v-icon class="mt-10">mdi-circle-medium</v-icon>
                </div>
                <div class="d-flex justify-end mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #f5f6f8 !important;">
                  <p style="font-size: 25px;" class="ml-10 mt-5">Html , css , js , vue js
                    , vuetify , store , pinia , Git , solid , axios</p>
                  <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                    وب
                    پیشرو پلاس با استفاده از </p>
                </div>
                <div class="d-flex justify-end mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #f5f6f8 !important;">
                  <p style="font-size: 25px;" class="ml-10 mt-5">Html , css , js , vue js
                    , vuetify , store , pinia , Git , solid , axios</p>
                  <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                    وب
                    پیشرو پلاس تیکت با استفاده از </p>
                </div>
                <div class="d-flex justify-end mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #f5f6f8 !important;">
                  <p style="font-size: 25px;" class="ml-10 mt-5">Html , css , js , vue js
                    , vuetify , store , pinia , Git , solid , axios</p>
                  <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                    وب
                    فرم استخدام با استفاده از </p>
                </div>
                <div class="d-flex justify-end">
                  <p style="font-size: 35px; margin-left: 220px !important;" class="ml-10 mt-5">: برنامه نویس شرکت
                    کسبوداد
                    ( خرداد 1403 _ تاکنون) </p>
                  <v-icon class="mt-10">mdi-circle-medium</v-icon>
                </div>
                <div class=" mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #f5f6f8 !important;">
                  <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                    وب
                    رابط بین وکلا و مردم با استفاده از </p>
                  <p style="font-size: 25px;" class=" mt-5">Html , css , js , vue js , Nuxt js , Composition Api ,
                    vuetify , solid , store , pinia , Git , axios</p>

                </div>
                <div class="d-flex justify-end">
                  <p style="font-size: 35px; margin-left: 220px !important;" class="ml-10 mt-5">: برنامه نویس شرکت
                    نارون آریا
                    ( مهر 1403 _ تاکنون) </p>
                  <v-icon class="mt-10">mdi-circle-medium</v-icon>
                </div>
                <div class=" mr-3 ml-3 pa-5">
                  <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                    وب
                    تینکست با استفاده از </p>
                  <p style="font-size: 25px;" class=" mt-5">Html , css , js , vue js , Nuxt js , Composition Api ,
                    vuetify , solid , store , pinia , Git , axios , Sass</p>

                </div>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
      <div v-if="tab === 3">
        <v-card>
          <v-row no-gutters class="mt-10 text-right">
            <v-col md="12" class="text-right d-flex justify-end pa-10 " style="border-bottom: 1PX dashed #f5f6f8;">
              <p style="font-size: 30px; margin-left: 220px !important;" class="ml-10">Html , Css , JavaScript , VueJs
                ,
                Nuxt js ,
                Sass , Vuetify ,
                Composition Api
                , Pinia , Store , Git Hub
                , Axios , SOLID , Vuex , Tailwind css </p>
              <v-card-title style="font-size: 40px; " class="mb-10"> : مهارت ها</v-card-title>
            </v-col>
            <v-col md="12" class="text-right d-flex justify-end pa-10 mt-10 mb-10">
              <p style="font-size: 30px; margin-left: 220px !important;" class="ml-10 mt-5">
                php , figma , wordpress , prestashop , c# , ReactJs</p>
              <v-card-title style="font-size: 40px; "> : آشنا با</v-card-title>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
    <div v-if="tab === 5">
      helolo
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>

// import { Transition } from 'vuetify/lib';
export default {
  name: 'DefaultLayout',
  data() {
    return {
      tab: 1,
      showGreeting: false,
    };
  },
}
</script>

<style>
/* .cover{} */

body {
  /* background-color: #faf1fc; */
  background-color: #f5f6f8 !important;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;

}

.background-cover {
  background-color: #c3c5a5;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.background-cover {
  background-color: #f5f6f8;
}

.title {
  filter: drop-shadow(3px 1px 5px #d1bbf7);
  position: relative;
}

.main {
  background-color: #f5f6f8;
}
</style>
