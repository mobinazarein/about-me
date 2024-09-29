<!-- src/components/DefaultLayout.vue -->
<template>
  <div>
    <header>
      <div class="main">
        <div class="cover">
          <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4" class="mb-10">
            <v-tab :value="1">about me</v-tab>
            <v-tab :value="2">resume</v-tab>
            <v-tab :value="3">contact me</v-tab>
          </v-tabs>
          <div class="mt-10" style="text-align: center;">
            <h3 style="color: gray;" class="mb-8 name">Mobina Zarein</h3>
            <h1 style=" font-weight: 900; font-size: 3em;color: white !important; " class="mb-8 front">FRONT END DEVELOPER
            </h1>
            <a href="https://t.me/mbinaaa_zr" target="_blank">
              <v-icon class="mr-5" style="color: gray; cursor: pointer;">
                mdi mdi-telegram
              </v-icon>
            </a>
            <!-- <v-icon class="mr-5" style="color: gray;cursor: pointer;" to="https://t.me/mbinaaa_zr">mdi mdi-telegram</v-icon> -->
            <!-- <v-icon class="mr-5" style="color: gray;cursor: pointer;">mdi mdi-instagram</v-icon> -->
            <a href="https://www.instagram.com/mbinaa_zrr" target="_blank">
    <v-icon class="mr-5" style="color: gray; cursor: pointer;">
        mdi mdi-instagram
    </v-icon>
</a>
            <v-icon style="color: gray;cursor: pointer;">mdi mdi-github</v-icon>
          </div>
          <!-- <div style="border-top: 1px solid gray; width: 50%; text-align: center;position: relative; top: 10px; left: 25%;"></div> -->
          <div class="d-flex mt-10 alighn-center justify-center" style="color: gray;text-align: center;">
            <p>Email address: mobinazarein049@gmail.com</p>
            <!-- <span class="ml-1 mr-1">|</span> -->
            <!-- <p>Location: Iran</p> -->
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
    <!-- <footer>
    <p>Footer</p>
  </footer> -->
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
.name{
  letter-spacing: 2px;
}
@media (max-width: 768px) {
  .main{
    height: 350px !important;
  }
  .front{
    font-size: 2em !important;
   margin-top: 2px !important;
  }
}
</style>