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
        path: "/discipulos/novo",
        name: "Novo Discipulo",
        component: () => import("../views/NovoDiscipulo.vue")
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


router.beforeEach(async (to, from, next) => {
  
  const isAuthenticated = authStore.getters.isAuthenticated.value

  if (to.name !== 'Login' && !isAuthenticated) {
    return next({ path: '/login' })    
  }  

  if (to.name === 'Login' && isAuthenticated) {
     return next({ path: '/dashboard' }) 
  }

  if (to.path === '/logout') {
    await authStore.logout()
    return next({ path: '/login' })
  }

  next()


})

export default router;
