<template>
  <!-- <div class="background-cover"> -->
  <header style="width: 100%;margin-left: auto; margin-right: auto;direction: rtl;padding-bottom: 120px !important;"
    class="main ">
    <v-row no-gutters class="mb-10 cover">
      <v-col cols="8" class="">
        <v-tabs v-model="tab" align-tabs="center" color="#F3E5F5" class="mb-10 mt-8">
          <v-tab :value="1" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">خانه</v-tab>
          <!-- <v-tab :value="2" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">درباره من</v-tab> -->
          <v-tab :value="3" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">مهارت ها </v-tab>
          <v-tab :value="4" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;"> نمونه کار ها (سوابق
            شغلی )
          </v-tab>
          <!-- <v-tab :value="5" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;"> رزومه </v-tab> -->
          <v-tab :value="5" class="mr-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;"> ارتباط با من
          </v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="4">
        <h1 class="mt-8 text-left ml-5" style="color: white"> Front End Developer</h1>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-10">
      <v-col cols="12" md="12" class="mr-5 mt-10 d-flex">
        <h1 class="mb-8" style="font-size: 80px;word-spacing: 8px; color: white;">من مبینا هستم </h1>
        <h1 class="mt-10 mr-5" style="font-size: 50px;word-spacing: 8px; color: white;">برنامه نویس حوزه وب...</h1>
      </v-col>
    </v-row>
  </header>
  <!-- <transition name="fade" mode="out-in"> -->
  <div :key="tab">
    <div v-if="tab === 1">
      <div>
        <v-card class="container ">
          <v-row no-gutters class="mt-10 text-right">
            <v-col md="12" class="text-right ">
              <div class="text-right ">
                <v-card-title style="font-size: 40px; border-bottom: 1PX dashed #BCC080; " class="mb-10 mr-10 ml-10"> :
                  مهارت
                  ها</v-card-title>
                <p style="font-size: 30px; margin-left: 220px !important;" class="ml-10">Html , Css , JavaScript , VueJs
                  ,
                  Nuxt js ,
                  Sass , Vuetify ,
                  Composition Api
                  , Pinia , Store , Git Hub
                  , Axios , SOLID , Vuex , Tailwind css </p>
              </div>
              <v-btn color="#2E3105" style="float: left;text-align: center; height: 50px;width: 190px;"
                @click="tab = 3">view more
                ...</v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-card style="background-color: #BCC080;">
          <v-row>
            <v-col md="12" class="text-right" style=" border-bottom: 1PX dashed #BCC080;">
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
              <v-btn color="#DFE777" style="float: left;text-align: center; height: 50px;width: 190px;" @click="tab = 4"
                class="ml-10 mb-10">view more
                ...</v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-card class="container ">
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
        <v-card style="background-color: #FFFDC1;">
          <v-row>
            <v-col md="12" class="text-right" style=" border-bottom: 1PX dashed #BCC080;">
              <v-card-title style="font-size: 40px; " class="mt-5"> : نمونه کار ها</v-card-title>
              <div class="d-flex justify-end">
                <p style="font-size: 35px; margin-left: 220px !important;" class="ml-10 mt-5">: برنامه نویس شرکت پویان
                  سیستم ( اردیبهشت 1403 _ مهر 1403) </p>
                <v-icon class="mt-10">mdi-circle-medium</v-icon>
              </div>
              <div class="d-flex justify-end mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #BCC080 !important;">
                <p style="font-size: 25px;" class="ml-10 mt-5">Html , css , js , vue js
                  , vuetify , store , pinia , Git , solid , axios</p>
                <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                  وب
                  پیشرو پلاس با استفاده از </p>
              </div>
              <div class="d-flex justify-end mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #BCC080 !important;">
                <p style="font-size: 25px;" class="ml-10 mt-5">Html , css , js , vue js
                  , vuetify , store , pinia , Git , solid , axios</p>
                <p style="font-size: 25px;" class=" mt-5"> : توسعه نرم افزار تحت
                  وب
                  پیشرو پلاس تیکت با استفاده از </p>
              </div>
              <div class="d-flex justify-end mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #BCC080 !important;">
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
              <div class=" mr-3 ml-3 pa-5" style="border-bottom: 1px dashed #BCC080 !important;">
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
      <v-card class="container ">
        <v-row no-gutters class="mt-10 text-right">
          <v-col md="12" class="text-right d-flex justify-end pa-10 " style="border-bottom: 1PX dashed #BCC080;">
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
  background-color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;

}

.background-cover {
  background-image: url(../../public/download1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
}

/* header {
  background-color: rgba(#E1BEE7, #E1BEE7, #E1BEE7, 1);
  border: 1px solid #6200EA;
  border-radius: 50px;
  margin-top: 5px;
  /* filter: drop-shadow(3px 1px 5px #9575CD); */

/* } */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  background-color: #FFFDC1;

}

.background-cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(241, 205, 255, 0.5);
  /* background-color: #757575; */
  /* رنگ کاور و شفافیت */
  /* z-index: ; */
  /* اطمینان از اینکه کاور بالای بک‌گراند قرار بگیرد */
}

.title {
  filter: drop-shadow(3px 1px 5px #d1bbf7);
  position: relative;
}

.main {
  background-color: #BCC080;
}
</style>
<!-- src/components/DefaultLayout.vue
<template>
  <div>
    <header style="width: 85%;margin-left: auto; margin-right: auto;">
      <div class="main">
        <div class="cover">
          <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4" class="mb-10 mt-5">
            <v-tab :value="1">about me</v-tab>
            <v-tab :value="2">resume</v-tab>
            <v-tab :value="3">contact me</v-tab>
          </v-tabs>
          <div class="mt-10" style="text-align: center;">
            <h3 style="color: gray;" class="mb-8 name">Mobina Zarein</h3>
            <h1 style=" font-weight: 900; font-size: 3em;color: white !important; " class="mb-8 front">FRONT END
              DEVELOPER
            </h1>
            <a href="https://t.me/mbinaaa_zr" target="_blank">
              <v-icon class="mr-5" style="color: gray; cursor: pointer;">
                mdi mdi-telegram
              </v-icon>
            </a>
            <v-icon class="mr-5" style="color: gray;cursor: pointer;" to="https://t.me/mbinaaa_zr">mdi mdi-telegram</v-icon> 
            <v-icon class="mr-5" style="color: gray;cursor: pointer;">mdi mdi-instagram</v-icon> 
            <a href="https://www.instagram.com/mbinaa_zrr" target="_blank">
              <v-icon class="mr-5" style="color: gray; cursor: pointer;">
                mdi mdi-instagram
              </v-icon>
            </a>
            <v-icon style="color: gray;cursor: pointer;">mdi mdi-github</v-icon>
          </div>
      <div style="border-top: 1px solid gray; width: 50%; text-align: center;position: relative; top: 10px; left: 25%;"></div> 
          <div class="d-flex mt-10 alighn-center justify-center" style="color: gray;text-align: center;">
            <p>Email address: mobinazarein049@gmail.com</p>
          <span class="ml-1 mr-1">|</span> 
            <p>Location: Iran</p> 
          </div>
        </div>
      </div>
      <transition name="fade" mode="out-in">
        <div :key="tab">
          <div v-if="tab === 1">
            <about></about>
          </div>
          <div v-if="tab === 2">
            <resume></resume>
          </div>
          <div v-if="tab === 3">
            <contact></contact>
          </div>
        </div>
      </transition>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
    <p>Footer</p>
  </footer> 
  </div>
</template>

<script>
import about from '../pages/AboutMe.vue'
import resume from '../pages/MyRsume.vue'
import contact from '../pages/ContactMe.vue'
export default {
  name: 'DefaultLayout',
  data() {
    return {
      tab: 1,
    };
  },
  components: {
    about,
    resume,
    contact
  }
};
</script>

<style>
body {
  background-color: rgb(19, 18, 18);
  font-family: 'Roboto', sans-serif !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.main {
  height: 400px !important;
  background-image: url(../../public/back2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.v-tab.v-tab.v-btn {
  color: rgb(98, 48, 145);
}

.name {
  letter-spacing: 2px;
}

@media (max-width: 768px) {
  .main {
    height: 350px !important;
  }

  .front {
    font-size: 2em !important;
    margin-top: 2px !important;
  }
}
</style> -->
