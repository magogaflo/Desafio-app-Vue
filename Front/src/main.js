import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)


import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import '@/assets/css.css'
import '@/assets/responsive.css'
import '@/assets/styles.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
