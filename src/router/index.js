import { createWebHistory, createRouter } from 'vue-router';
import Contactbook from '@/views/ContactBook.vue';


const routes = [
    {
        path: '/',
        name: 'contactbook',
        component: Contactbook,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notfound',
        component: ()=> import('@/views/NotFound.vue'),
    },
    {
        path: '/contacts/:id',
        name: 'contact.edit',
        component: ()=> import('@/views/ContactEdit.vue'),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.baseURL),
    routes,
});


export default router;
