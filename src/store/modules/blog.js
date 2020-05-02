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
    orders: [
      {
        column: 'update_time',
        asc: false,
      },
    ],
  },
  articleListCards: [],
  tagList: [],
  aboutMe: {},
  loadingArticleListData: {
    text: '正在加载文章列表...',
    active: true,
    absolute: true,
    top: true,
    rounded: false,
  },
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
      orders: [
        {
          column: 'update_time',
          asc: false,
        },
      ],
    }
  },
  saveTagList ($state, payload) {
    const STATE = $state
    STATE.tagList = payload
  },
  saveAboutMe ($state, payload) {
    const STATE = $state
    STATE.aboutMe = payload
  },
  updateArticleListDataLoading ($state, payload) {
    const STATE = $state
    STATE.loadingArticleListData = { ...STATE.loadingArticleListData, ...payload }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
