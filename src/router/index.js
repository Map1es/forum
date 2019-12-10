
import login from '@/views/login.vue'
import home from '@/views/home/home.vue'
import registered from '@/views/registered.vue'

export const index = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/registered',
    name: 'registered',
    component: registered
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
