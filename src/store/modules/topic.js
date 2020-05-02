const state = {
  topicList: [],
}

const getters = {}

const actions = {}

const mutations = {
  saveTopicList ($state, value) {
    const STATE = $state
    STATE.topicList = value
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
