<template>
  <fragment>
    <template v-if="!loadingArticleListData.active">
      <ArticleList></ArticleList>
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
  name: 'blog-article',
  components: {
    ArticleList,
    ArticlePaginationBar,
    RightSideScrollButton,
    CenterLinearLoading,
  },
  data: () => ({
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
      axios.post(mainUrl.article.getSummaryList, { page: this.articleListPage })
        .then((response) => {
          const { data } = response
          const { records } = data
          this.updateArticleListCards(records)
          this.updateArticleListPage({
            size: data.size,
            current: data.current,
            total: data.total,
            pages: data.pages,
          })
          this.updateArticleListDataLoading({ active: false })
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
    this.resetArticleListPage()
  },
}
</script>

<style>
</style>
