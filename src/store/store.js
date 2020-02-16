import Vue from 'vue'
import Vuex from 'vuex'
import navDrawer from '@/store/modules/navDrawer'
import blog from '@/store/modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    navDrawer,
    blog,
  },
})
