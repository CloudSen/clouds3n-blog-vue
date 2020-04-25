import TRIGGER_DRAWER from '@/components/header/constants/mutationType'
import { UPDATE_DRAWER_SHOW, CACHE_DRAWER_MENU, UPDATE_LOADING } from '@/components/aside/constants/mutationType'

const state = {
  show: false,
  drawerMenu: [],
  loadingData: {
    text: '正在加载菜单列表...',
    active: true,
  },
}

const getters = {}

const actions = {}

const mutations = {
  [TRIGGER_DRAWER] ($state) {
    const STATE = $state
    STATE.show = true
  },
  [UPDATE_DRAWER_SHOW] ($state, value) {
    const STATE = $state
    STATE.show = value
  },
  [CACHE_DRAWER_MENU] ($state, value) {
    const STATE = $state
    STATE.drawerMenu = value
  },
  [UPDATE_LOADING] ($state, value) {
    const STATE = $state
    STATE.loadingData = { ...STATE.loadingData, ...value }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
