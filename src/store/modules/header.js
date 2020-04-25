const state = {
  headerMenu: [],
}

const getters = {}

const actions = {}

const mutations = {
  saveHeaderMenu ($state, value) {
    const STATE = $state
    STATE.headerMenu = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
