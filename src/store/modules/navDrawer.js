import TRIGGER_DRAWER from '@/components/header/constants/mutationType'
import UPDATE_DRAWER_SHOW from '@/components/aside/constants/mutationType'

const state = {
  show: false,
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
