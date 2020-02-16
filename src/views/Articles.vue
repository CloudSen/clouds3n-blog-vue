<template>
  <fragment>
    <ArticleList></ArticleList>
    <ArticlePaginationBar></ArticlePaginationBar>
    <RightSideScrollButton></RightSideScrollButton>
  </fragment>
</template>

<script>
import { mapMutations } from 'vuex'
import articlesData from '@/testData/articlesData'
import ArticleList from '@/components/main/blog/article/ArticleList'
import ArticlePaginationBar from '@/components/main/blog/article/ArticlePaginationBar'
import RightSideScrollButton from '@/components/main/floatingButton/RightSideScrollButton'

export default {
  name: 'blog-article',
  components: {
    ArticleList,
    ArticlePaginationBar,
    RightSideScrollButton,
  },
  methods: {
    ...mapMutations('blog/', [
      'updateArticleListPage',
      'updateArticleListCards',
      'resetArticleListPage',
    ]),
    fetchArticleSummaryData () {
      // TODO 调用API获取文章摘要
      this.updateArticleListCards(articlesData.records)
      this.updateArticleListPage({
        size: articlesData.size,
        current: articlesData.current,
        total: articlesData.total,
        pages: articlesData.pages,
      })
    },
  },
  mounted () {
    console.debug('正在获取文章摘要列表...')
    this.fetchArticleSummaryData()
  },
}
</script>

<style>
</style>
