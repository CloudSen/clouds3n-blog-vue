const state = {
  terminalConfig: {},
}

const getters = {}

const actions = {}

const mutations = {
  saveTerminalConfig ($state, payload) {
    const STATE = $state
    STATE.terminalConfig = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
