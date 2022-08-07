import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue'

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

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

//export default router
