import Vue from 'vue'
import Vuex from 'vuex'
import navDrawer from '@/store/modules/navDrawer'
import blog from '@/store/modules/blog'
import header from '@/store/modules/header'
import welcome from '@/store/modules/welcome'
import topic from '@/store/modules/topic'

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
    welcome,
    topic,
  },
})
