import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/common'

import { index } from '@/router/index.js'

Vue.use(Router)

const router = new Router({
  routes: [...index]
})

router.beforeEach((to, from, next) => {
  let token = store.getters.getToken
  // 判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if (token) {
      if (from.query.redirect) {
        if (to.path === from.query.redirect) {
          next()
        } else {
          next({
            path: from.query.redirect
          })
        }
      } else {
        next()
      }
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
