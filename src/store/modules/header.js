const state = {
  headerMenu: [],
  progressData: {
    active: false,
  },
}

const getters = {}

const actions = {}

const mutations = {
  saveHeaderMenu ($state, value) {
    const STATE = $state
    STATE.headerMenu = value
  },
  updateProgressData ($state, payload) {
    const STATE = $state
    STATE.progressData = { ...STATE.progressData, ...payload }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
