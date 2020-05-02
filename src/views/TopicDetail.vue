<template>
  <fragment>
    <v-toolbar dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{this.topicName}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <template v-if="!loadingArticleListData.active">
      <ArticleList :colCss="artilceColCss"></ArticleList>
      <ArticlePaginationBar></ArticlePaginationBar>
    </template>
    <template v-else>
      <CenterLinearLoading :loadingData="this.loadingArticleListData"></CenterLinearLoading>
    </template>
    <RightSideScrollButton></RightSideScrollButton>
  </fragment>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ArticleList from '@/components/main/blog/article/ArticleList'
import ArticlePaginationBar from '@/components/main/blog/article/ArticlePaginationBar'
import RightSideScrollButton from '@/components/common/btn/floatingButton/RightSideScrollButton'
import CenterLinearLoading from '@/components/common/loading/CenterLinearLoading'
import { goToTop } from '@/utils/windowSizeUtil'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'topic-detail',
  components: {
    ArticleList,
    ArticlePaginationBar,
    RightSideScrollButton,
    CenterLinearLoading,
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
      'updateArticleListPage',
      'updateArticleListCards',
      'resetArticleListPage',
      'updateArticleListDataLoading',
    ]),
    init () {
      this.fetchArticleSummaryData()
    },
    fetchArticleSummaryData () {
      axios.get(`${mainUrl.topic.getArticleList}${this.$route.params.uuid}`)
        .then((response) => {
          const { data } = response
          this.topicName = data.topicName
          this.updateArticleListCards(data.articleSummaryDtoList)
          this.updateArticleListPage({
            size: data.size,
            current: data.current,
            total: data.total,
            pages: data.pages,
          })
          this.updateArticleListDataLoading({ active: false })
        }).catch((error) => {
          console.log(error)
          this.updateArticleListCards(null)
        })
    },
  },
  mounted () {
    this.init()
    goToTop(this.$vuetify)
  },
  destroyed () {
    this.resetArticleListPage()
  },
}
</script>

<style scoped>
</style>
