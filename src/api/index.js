import Axios from './request'

/**
* 公共接口
 */

// 获取验证码
export const getCode = (data) => Axios({ method: 'get', url: `/getCode`, params: data })

// 登录
export const login = (data) => Axios({ method: 'post', url: `/login`, data: data })

export const registered = (data) => Axios({ method: 'post', url: `/registered`, data: data })
