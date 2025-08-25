import { createRouter, createWebHistory } from 'vue-router'
import keren from '../views/keren.vue'
import ishare from '@/views/ishare.vue'

const routes = [
    {
        path: '/',
        name: 'keren',
        component: keren
    },
    {
        path: '/ishare',
        name: 'ishare',
        component: ishare
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router