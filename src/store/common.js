import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import home from '@/store/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage // 修改存储的状态
    })
  ] // 状态持久化
})

export default store
