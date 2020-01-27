import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Challenge from '../views/Challenge.vue'
import Solutions from '../views/Solutions.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/challenge/:id',
    name: 'challenge',
    component: Challenge
  },
  {
    path: '/challenge/:id/solutions',
    name: 'solutions',
    component: Solutions
  }
]

const router = new VueRouter({
  routes
})

export default router
