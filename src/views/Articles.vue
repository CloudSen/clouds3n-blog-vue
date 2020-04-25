<template>
  <fragment>
    <template v-if="!loadingData.active">
      <ArticleList></ArticleList>
      <ArticlePaginationBar></ArticlePaginationBar>
    </template>
    <template v-else>
      <CenterLinearLoading :loadingData="this.loadingData"></CenterLinearLoading>
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
    loadingData: {
      text: '正在加载文章列表...',
      active: true,
      absolute: true,
      top: true,
      rounded: false,
    },
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
          this.loadingData.active = false
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
