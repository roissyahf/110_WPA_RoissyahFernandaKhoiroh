import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PricingView from '../views/PricingView.vue'
import BookNowView from '../views/BookNowView.vue'
import BlogView from '../views/BlogView.vue'

Vue.use(VueRouter)

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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
