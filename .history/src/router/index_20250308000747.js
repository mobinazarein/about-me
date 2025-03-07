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
        path: "home",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "about",
        name: "AboutMe",
        component: AboutMe,
      },
      {
        path: "contact-me",
        name: "ContactMe",
        component: ContactMe,
      },
      {
        path: "",
        redirect: "home",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
