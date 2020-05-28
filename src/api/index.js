import Axios from './request'

/**
* 公共接口
 */

// 获取验证码
export const getCode = (data) => Axios({ method: 'get', url: `/api/index`, params: data })

// 登录
export const login = (data) => Axios({ method: 'post', url: `/api/login`, data: data })

export const registered = (data) => Axios({ method: 'post', url: `/registered`, data: data })
