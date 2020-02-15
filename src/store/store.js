import Vue from 'vue'
import Vuex from 'vuex'
import navDrawer from '@/store/modules/navDrawer'
import blogArticle from '@/store/modules/blogArticle'

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
    blogArticle,
  },
})
