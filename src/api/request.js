'use strict'
/**
 * @file axios请求封装
 */
import axios from 'axios'

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

// 添加返回拦截器
Axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '登录过期，请重新登录'
          // 跳到登录界面
          localStorage.clear()
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求失败'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '无法连接服务器'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '连接服务器超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
      }
      console.error(error.message)
    } else {
      error.message = '无法连接服务器'
      console.error(error.message)
    }
    // 对返回的错误处理

    return Promise.reject(error)
  }
)

// 请求失败错误信息提示
export default Axios
