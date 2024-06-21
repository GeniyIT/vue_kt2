import HomePage from '@/Pages/HomePage.vue'
import MainPage from "@/Pages/MainPage.vue";
import UsersPage from "@/Pages/UsersPage.vue";
import LoginPage from "@/Pages/LoginPage.vue";
import ProfilePage from "@/Pages/ProfilePage.vue";

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/Home',
            component: HomePage
        },
        {
            path: '/Users',
            component: UsersPage
        },
        {
            path: '/Login',
            component: LoginPage
        },
        {
            path: '/Profile',
            component: ProfilePage
        }
    ]
})

export default router
