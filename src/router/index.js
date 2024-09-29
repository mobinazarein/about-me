// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue'; // مسیر به کامپوننت‌های صفحات
// import About from '../views/About.vue'; // مسیر به کامپوننت‌های صفحات
import DefaultLayout from '../components/defaultLayout.vue'
import aboutMe  from '../pages/AboutMe.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout, // استفاده از DefaultLayout
        children: [
            // {
            //     path: '',
            //     name: 'Home',
            //     component: Home,
            // },
            {
                path: 'about',
                name: 'aboutMe',
                component: aboutMe,
            },
            // می‌توانید مسیرهای بیشتری اضافه کنید
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;