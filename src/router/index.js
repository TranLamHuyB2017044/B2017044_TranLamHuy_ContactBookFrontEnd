import { createWebHistory, createRouter } from 'vue-router';
import Contactbook from '@/views/ContactBook.vue';


const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: Contactbook,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.baseURL),
    routes,
});


export default router;
