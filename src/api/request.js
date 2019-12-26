'use strict'
/**
 * @file axios请求封装
 */
import axios from 'axios'
import store from '../store/common'
import router from '../router/common'
import { Message } from 'element-ui'
let $message = Message

const Axios = axios.create({})

// 响应时间
Axios.defaults.timeout = 10000
// `withCredentails`选项表明了是否是跨域请求
Axios.defaults.withCredentials = true
// 设置默认请求头
Axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=UTF-8'
}

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// request拦截器，每次发送请求的时候拦截下来
Axios.interceptors.request.use(
  config => {
    // 每次发送请求，检查 vuex 中是否有token,如果有放在headers中
    if (store.getters.getToken) {
      config.headers.Authorization = store.state.getToken
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 添加返回拦截器
Axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
  },
  err => {
    let { response } = err
    if (response !== null) {
      // 这里为什么处理401错误,详见，server/untils/token check_token这个函数
      if (response.status === 401) {
        let msg = response.data || '请重新登录!'
        $message({
          message: msg,
          type: 'error',
          onClose () {
            store.commit('remove') // token过期,清除
            router.replace({ // 跳转到登录页面
              path: '/login',
              // 添加一个重定向后缀，等登录以后再到这里来
              query: { redirect: router.currentRoute.fullPath }
            })
          }
        })
        return Promise.reject(err.response)
      } else {
        $message({
          message: '出错了，请重新登陆',
          type: 'error',
          onClose () {
            store.commit('remove') // token过期,清除
            router.replace({ // 跳转到登录页面
              path: '/login',
              // 添加一个重定向后缀，等登录以后再到这里来
              query: { redirect: router.currentRoute.fullPath }
            })
          }
        })
        return Promise.reject(err.response)
      }
    } else {
      console.log(err)
    }
  }
)

// 请求失败错误信息提示
export default Axios
