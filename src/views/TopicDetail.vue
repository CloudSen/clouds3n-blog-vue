<template>
  <fragment>
    <v-toolbar dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{this.topicName}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <ArticleList :colCss="artilceColCss"></ArticleList>
    <ArticlePaginationBar></ArticlePaginationBar>
    <RightSideScrollButton></RightSideScrollButton>
  </fragment>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ArticleList from '@/components/main/blog/article/ArticleList'
import ArticlePaginationBar from '@/components/main/blog/article/ArticlePaginationBar'
import RightSideScrollButton from '@/components/common/btn/floatingButton/RightSideScrollButton'
import { goToTop } from '@/utils/windowSizeUtil'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'topic-detail',
  components: {
    ArticleList,
    ArticlePaginationBar,
    RightSideScrollButton,
  },
  data: () => ({
    artilceColCss: {
      lg: '3',
      md: '4',
      sm: '6',
      xl: '2',
    },
    topicName: '专题',
  }),
  computed: {
    ...mapState('blog/', [
      'articleListPage',
      'loadingArticleListData',
    ]),
  },
  methods: {
    ...mapMutations('blog/', [
      'updateArticleListCards',
      'clearArticleListCards',
    ]),
    ...mapMutations('header/', ['updateProgressData']),
    init () {
      this.updateProgressData({ active: true })
      this.fetchArticleSummaryData()
    },
    fetchArticleSummaryData () {
      axios.get(`${mainUrl.topic.getArticleList}${this.$route.params.uuid}`)
        .then((response) => {
          const { data } = response
          this.topicName = data.topicName
          this.updateArticleListCards(data.articleSummaryDtoList)
          this.updateProgressData({ active: false })
        }).catch((error) => {
          console.log(error)
        })
    },
  },
  mounted () {
    this.init()
    goToTop(this.$vuetify)
  },
  destroyed () {
    this.clearArticleListCards()
  },
}
</script>

<style scoped>
</style>
