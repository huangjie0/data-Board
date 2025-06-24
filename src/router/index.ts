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
            path:"/test",
            name:"test",
            component: () => import("@/views/test/index.vue")
        },
        {
            path:"/showBoard",
            name:"showBoard",
            component:() => import("@/views/showBoard/index.vue"),
            redirect:'/showBoard/homeBoard',
            children:[
                {
                    path:'homeBoard',
                    name:'homeBoard',
                    component:() => import("@/views/homeBoard/index.vue")
                }
            ]
        },
        {
            path:'/:pathMatch(.*)*',
            name:'notFound',
            component: () => import("@/views/404/index.vue")
        }
    ]
})

export default router;
