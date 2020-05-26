import Vue from 'vue'
import Router from 'vue-router'

import { index } from '@/router/index.js'

Vue.use(Router)

const router = new Router({
  routes: [...index]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
