import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes:[
        {
            path: "/",
            name: "home",
            component: () => import("@/views/home/index.vue")
        },
           {
            path: "/preview",
            name: "preview",
            component: () => import("@/views/preview/index.vue")
        },
        {
            path:'/:pathMatch(.*)*',
            name:'notFound',
            component: () => import("@/views/404/index.vue")
        }
    ]
})

export default router;
