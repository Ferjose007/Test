import { createRouter, createWebHistory } from "vue-router"
// router/index.js  o  App.vue
import LandingView from '@/views/LandingView.vue'

const routes = [
  {
    path: "/",
    name: "App",
    component: () => import("../App.vue")
  },
  {
    path: "/LandingView",
    name: "LandingView",
    component: () => import("../views/LandingView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router