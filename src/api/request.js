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
// request拦截器，每次发送请求的时候拦截下来
Axios.interceptors.request.use()
// 添加返回拦截器
Axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
  }
)

// 请求失败错误信息提示
export default Axios
