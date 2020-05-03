<template>
  <fragment>
    <ArticlePaginationBar v-if="this.$vuetify.breakpoint.xsOnly"></ArticlePaginationBar>
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
  name: 'blog-article',
  components: {
    ArticleList,
    ArticlePaginationBar,
    RightSideScrollButton,
  },
  data: () => ({
    artilceColCss: {
      lg: '4',
      md: '6',
      sm: '6',
      xl: '4',
    },
  }),
  computed: {
    ...mapState('blog/', [
      'articleListPage',
    ]),
  },
  methods: {
    ...mapMutations('blog/', [
      'updateArticleListPage',
      'updateArticleListCards',
      'resetArticleListPage',
      'clearArticleListCards',
    ]),
    ...mapMutations('header/', ['updateProgressData']),
    init () {
      this.updateProgressData({ active: true })
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
          this.updateProgressData({ active: false })
        }).catch((error) => {
          console.log(error)
        })
    },
  },
  created () {
    this.init()
    goToTop(this.$vuetify)
  },
  destroyed () {
    this.resetArticleListPage()
    this.clearArticleListCards()
  },
}
</script>

<style>
</style>
