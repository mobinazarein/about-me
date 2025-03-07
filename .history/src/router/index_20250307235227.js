// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
// import home from '../views/home.vue'; // مسیر به کامپوننت‌های صفحات
// import About from '../views/About.vue'; // مسیر به کامپوننت‌های صفحات
import DefaultLayout from "../components/defaultLayout.vue";
import AboutMe from "../pages/AboutMe.vue";
import ContactMe from "@/pages/ContactMe.vue";
import home from "@/pages/HomePage.vue";
// import AboutMe from "../pages/AboutMe.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout, // استفاده از DefaultLayout
    children: [
      {
        path: "",
        name: "home",
        component: home,
      },
      {
        path: "about",
        name: "AboutMe",
        component: AboutMe,
      },
      // می‌توانید مسیرهای بیشتری اضافه کنید
    ],
  },
  {
    path: "/contact-me",
    name: "ContactMe",
    component: ContactMe,
  },
  {
    path: "/about",
    name: "AboutMe",
    component: AboutMe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
