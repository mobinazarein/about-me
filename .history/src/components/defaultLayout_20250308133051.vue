<template>
  <header style="width: 100%; margin: auto; direction: rtl;" class="main">
    <v-row no-gutters style="background-color: white;">
      <v-col cols="12" class="d-flex">
        <v-tabs v-model="tab" align-tabs="center" color="black">
          <v-tab to="/home">Home</v-tab>
          <v-tab to="/about">About/Contacts</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </header>

  <main>
    <v-window v-model="tab">
      <v-window-item value="/home">
        <router-view></router-view>
      </v-window-item>
      <v-window-item value="/about">
        <router-view></router-view>
      </v-window-item>
    </v-window>
  </main>

  <footer style="position: relative;">
    <div style="text-align: center; position: absolute; left: 47%; top: 30%;" class="icons">
      <a href="https://t.me/mobina_zrrr" target="_blank">
        <v-icon class="mr-3" style="cursor: pointer;">mdi-telegram</v-icon>
      </a>
      <a href="https://www.instagram.com/mobina_zrrr" target="_blank">
        <v-icon class="mr-3" style="cursor: pointer;">mdi-instagram</v-icon>
      </a>
      <a href="https://github.com/mobinazarein" target="_blank">
        <v-icon class="mr-3" style="cursor: pointer;">mdi-github</v-icon>
      </a>
      <a href="mailto:mobinazarein049@gmail.com" target="_blank">
        <v-icon style="cursor: pointer;">mdi-gmail</v-icon>
      </a>
    </div>
    <img src="/footer.png" width="100%" />
  </footer>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      tab: '/home',
    };
  },
}
</script>

<style>
a {
  color: black !important;
}

body {
  background-color: #f5f6f8 !important;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
}

.main {
  background-color: #f5f6f8;
}

@media(max-width:768px) {
  .icons {
    position: absolute !important;
  }
}
</style>
