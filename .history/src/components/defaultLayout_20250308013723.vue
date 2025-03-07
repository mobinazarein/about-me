<template>
  <header style="width: 100%;margin-left: auto; margin-right: auto;direction: rtl;" class="main">
    <v-row no-gutters style="background-color: white;">
      <v-col cols="12" md="12" class="d-flex">
        <v-col cols="6" class="">
          <!-- <v-tabs v-model="tab" align-tabs="center" color="black" class=" "> -->
          <v-btn class="mr-2" variant="text" style="font-size: 10px;color: black;font-weight: bold;"
            to="/home">home</v-btn>
          <v-btn class="mr-2" variant="text" style="font-size: 10px;color: black;font-weight: bold;"
            to="/contact-me">contact
            me</v-btn>
          <v-btn class="mr-2" variant="text" style="font-size: 10px;color: black;font-weight: bold;" to="/about">about
            me</v-btn>
        </v-col>
        <v-col cols="6" md="6" class="text-left">
          <p>some thing</p>
        </v-col>
      </v-col>
    </v-row>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer style="position: relative;">
    <div style="text-align: center;position: absolute;left: 50%;top: 20%;">
      <v-icon>mdi-telegram</v-icon>
      <v-icon>mdi mdi-instagram</v-icon>
      <v-icon>mdi-github</v-icon>
      <v-icon>mdi-gmail-outline</v-icon>
    </div>
    <img src="/footer.png" width="100%" />
  </footer>
</template>

<script>
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
