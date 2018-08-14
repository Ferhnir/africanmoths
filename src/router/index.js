import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store.js' 

import loginRoute from '@/modules/login/router'

Vue.use(Router);

const AdminDashboardView = () => import('../views/AdminDashboardView.vue');

const ifAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
      return next('/login')
  } 
  next()
}

const baseRoutes = [
  {
    path: '/admin',
    name: 'admin',
    title: 'Admin dashboard',
    component: AdminDashboardView,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '*',
    redirect: { name: 'admin' },
  },
];

const routes = baseRoutes.concat(loginRoute);

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes
});
