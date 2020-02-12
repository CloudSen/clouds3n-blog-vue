import Vue from 'vue'
import Fragment from 'vue-fragment'
import App from './App'
import vuetify from '@/plugins/vuetify'
import router from '@/router/router'
import store from '@/store/store'

Vue.config.productionTip = false
Vue.use(Fragment.Plugin)

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
