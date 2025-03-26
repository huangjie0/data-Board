import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_PATH),
    routes:[
        {
            path: "/",
            name: "home",
            component: () => import("@/components/HelloWorld.vue"),
        },
    ]
})

export default router;
