import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/defaultLayout.vue";
import AboutMe from "../pages/AboutMe.vue";
import ContactMe from "@/pages/ContactMe.vue";
import HomePage from "@/pages/HomePage.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "home", // اینجا نیازی به "/" نیست
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "about", // اینجا نیازی به "/" نیست
        name: "AboutMe",
        component: AboutMe,
      },
      {
        path: "contact-me", // اینجا نیازی به "/" نیست
        name: "ContactMe",
        component: ContactMe,
      },
      {
        path: "", // مسیر خالی برای ریدایرکت به صفحه اصلی
        redirect: "home",
      },
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
