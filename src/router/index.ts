import { createRouter, createWebHistory } from "vue-router";
import authStore from '../store/auth';

const routes = [
  {
    path: "/",
    component: () => import("../views/Page.vue"),
    redirect: '/dashboard',
    children: [
      {
        path: "/dashboard",   
        name: "Dashboard",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/discipulos",   
        name: "Discipulos",
        component: () => import("../views/Discipulos.vue"),
      },
      {
        path: "/vinculos",   
        name: "Vinculos",
        component: () => import("../views/Vinculos.vue"),
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];



const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "is-active",
  routes,
});


router.beforeEach((to, from, next) => {
  let isAuthenticated = authStore.getters.isAuthenticated  

  if (to.name !== 'Login' && !isAuthenticated) next({ path: '/login' })
  else next()


})

export default router;
