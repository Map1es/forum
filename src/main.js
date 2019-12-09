import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from '@/store/common'
import router from '@/router/common'

import './styles/normalize.css'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
