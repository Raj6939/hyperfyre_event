import { createRouter, createWebHistory } from 'vue-router'
import Event from '/src/components/Event.vue'
import Home from '/src/components/Home.vue'
// import Login from '/src/components/Login.vue'
// import Social from './components/Social.vue'

const routes = [
 
  {
    path: '/',
    name: 'Event',
    component: Event
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
