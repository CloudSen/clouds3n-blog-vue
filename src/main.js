import Vue from 'vue'
import Fragment from 'vue-fragment'
import vuetify from '@/plugins/vuetify'
import router from '@/router/router'
import store from '@/store/store'
import App from './App'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
