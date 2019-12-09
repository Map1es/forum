import Axios from './request'

/**
* 公共接口
 */

// 登录
export const login = (data) => Axios({ method: 'post', url: `/login`, data: data })
