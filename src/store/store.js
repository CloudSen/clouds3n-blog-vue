import Vue from 'vue'
import Vuex from 'vuex'
import navDrawer from '@/store/modules/navDrawer'
import blog from '@/store/modules/blog'
import header from '@/store/modules/header'

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
    header,
  },
})
