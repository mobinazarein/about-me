<template>
  <v-card class="container ma-10">
    <div class="background-cover"></div>
    <header style="width: 85%;margin-left: auto; margin-right: auto;direction: rtl;" class="main mb-10">
      <v-row no-gutters class="mb-10">
        <v-col cols="3">
          <h1 class="mt-8 title" style="color: #F3E5F5"> Front End Developer</h1>
        </v-col>
        <v-col cols="9" class="cover">
          <v-tabs v-model="tab" align-tabs="center" color="#F3E5F5" class="mb-10 mt-8">
            <v-tab :value="1" class="ml-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">خانه</v-tab>
            <v-tab :value="2" class="ml-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">درباره من</v-tab>
            <v-tab :value="3" class="ml-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">مهارت ها </v-tab>
            <v-tab :value="4" class="ml-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;">نمونه کار ها
            </v-tab>
            <v-tab :value="5" class="ml-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;"> رزومه </v-tab>
            <v-tab :value="6" class="ml-5" style="font-size: 18px;color: #F3E5F5;font-weight: bold;"> ارتباط با من
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </header>
    <transition name="fade" mode="out-in">
      <div :key="tab" class="mt-10">
        <div v-if="tab === 1">
          <v-row no-gutters justify="center" class="mt-10 d-flex flex-column justify-center align-center">
            <v-col md="12">
              <h3 color="red" style="color: white;text-align: center;font-size: 12px;">وبسایت شخصی</h3>
              <h1 style="color: white;text-align: center;">سلام من <b>مبینا</b> هستم</h1>
              <h1 style="color: white;text-align: center;font-size: 12px;">برنامه نویس حوزه وب</h1>
              <div class="d-flex justify-center">
                <v-icon>mdi mdi-telegram</v-icon>
                <v-icon>mdi mdi-github</v-icon>
                <v-icon>mdi mdi-instagram</v-icon>
                <v-icon>mdi mdi-linkdin</v-icon>
              </div>
            </v-col>

          </v-row>

        </div>
        <div v-if="tab === 2">
          <resume></resume>
        </div>
        <div v-if="tab === 3">
          <contact></contact>
        </div>
      </div>
    </transition>
  </v-card>
</template>

<script>
// import about from '../pages/AboutMe.vue'
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
    // about,
    resume,
    contact
  }
};
</script>

<style>
body {
  background-color: #faf1fc;
  font-family: 'Roboto', sans-serif !important;
}

/* header {
  background-color: rgba(#E1BEE7, #E1BEE7, #E1BEE7, 1);
  border: 1px solid #6200EA;
  border-radius: 50px;
  margin-top: 5px;
  /* filter: drop-shadow(3px 1px 5px #9575CD); */

/* } */

*/ .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  background-color: #f7f1f8;
  box-shadow: 2px 2px 18px 2px #9575CD;
  background-image: url(../../public/download2.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
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
  /* z-index: 2; */
  /* اطمینان از اینکه عنوان بالای کاور قرار بگیرد */
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
