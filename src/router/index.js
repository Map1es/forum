
import login from '@/views/login.vue'
import home from '@/views/home/home.vue'

export const index = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]
