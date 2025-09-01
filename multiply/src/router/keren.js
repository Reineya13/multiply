import { createRouter, createWebHistory } from 'vue-router'
import fund from '../views/fund.vue'
import ishare from '@/views/ishare.vue'

const routes = [
    {
        path: '/',
        name: 'fund',
        component: fund
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