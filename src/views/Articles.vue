<template>
  <fragment>
    <ArticleList></ArticleList>
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

  }),
  methods: {
    ...mapMutations('blog/', [
      'updateArticleListPage',
      'updateArticleListCards',
      'resetArticleListPage',
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
        }).catch((error) => console.log(error))
    },
  },
  computed: {
    ...mapState('blog/', [
      'articleListPage',
    ]),
  },
  mounted () {
    this.init()
    goToTop(this.$vuetify)
  },
}
</script>

<style>
</style>
