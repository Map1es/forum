import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import router from './router'

import './styles/normalize.css'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
