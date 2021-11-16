import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path:'/',
        name:"Home",
        component:()=>import('../pages/dashboard.vue')
    }
    ,
    {
        path:'/about',
        name:"About",
        component:()=>import('../pages/dashboard.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router