//import { createRouter, createWebHistory } from 'vue-router'
//import Vue from 'vue'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PricingView from '../views/PricingView.vue'
import BookNowView from '../views/BookNowView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/home',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/about',
    name: 'aboutpage',
    component: AboutView
  },
  {
    path: '/pricing',
    name: 'pricingpage',
    component: PricingView
  },
  {
    path: '/booking',
    name: 'bookingpage',
    component: BookNowView
  },
  {
    path: '/blog',
    name: 'blogpage',
    component: BlogView
  },
]

//const router = createRouter({
//history: createWebHistory(),
//routes})

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});


const App = Vue.createApp(App).use(router).mount('#app');

//const app = Vue.createApp({})
//app.use(router)
//app.mount('#app')

//export default router
