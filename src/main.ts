import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import i18n from '@/lang'
import '@/styles/element-variables.scss'
import '@/styles/global.scss' // global css
import Element from 'element-ui'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'small', // set element-ui default size
  i18n: (key: any, value: any) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
