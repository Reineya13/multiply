import { createRouter, createWebHistory } from 'vue-router'
import keren from '../views/keren.vue'

const routes = [
    {
        path: '/',
        name: 'keren',
        component: keren
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router