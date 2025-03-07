<!-- src/App.vue -->
<template>
  <div id="app">
    <v-main>
      <DefaultLayout />
      <slot></slot>
    </v-main>
    <router-view></router-view>
  </div>
</template>

<script>
import DefaultLayout from './components/defaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout
  }
};
</script>

<style></style>