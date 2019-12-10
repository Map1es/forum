import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/common'

import { index } from '@/router/index.js'

Vue.use(Router)

const router = new Router({
  routes: [...index]
})

router.beforeEach((to, from, next) => {
  if (store.getters.getToken == '' && to.name != 'login') {
    next('/login')
  }
  next()
})

export default router
