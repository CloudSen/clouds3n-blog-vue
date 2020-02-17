const state = {
  myInfo: {
    avatar: {
      class: 'white--text align-end',
      src: 'https://s2.ax1x.com/2020/02/16/3pu9YD.jpg',
      title: 'CloudS3n',
    },
  },
  articleListPage: {
    size: 9,
    current: 1,
    total: 0,
    pages: 0,
  },
  articleListCards: [],
}

const getters = {}

const actions = {}

const mutations = {
  updateArticleListPage ($state, payload) {
    const STATE = $state
    STATE.articleListPage = { ...STATE.articleListPage, ...payload }
  },
  updateArticleListCards ($state, payload) {
    const STATE = $state
    STATE.articleListCards = payload
  },
  resetArticleListPage ($state) {
    const STATE = $state
    STATE.articleListPage = {
      size: 9,
      current: 1,
      total: 0,
      pages: 0,
    }
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
