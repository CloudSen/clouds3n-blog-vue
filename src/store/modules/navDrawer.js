const state = {
  show: false,
}

const getters = {}

const actions = {}

const mutations = {
  triggerDrawer ($state) {
    const localState = $state
    localState.show = true
  },
  updateDrawerShow ($state, value) {
    const localState = $state
    localState.show = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
