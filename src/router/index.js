import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateYourPlan from '../views/CreateYourPlan.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create_your_plan',
    name: 'your-plan',
    component: CreateYourPlan
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); // na promjenu stranice vrati nazad na vrh stranice
  next(); //next da se prebaci na iducu rutu(stranicu)
})

export default router
