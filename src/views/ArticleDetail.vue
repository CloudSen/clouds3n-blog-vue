<template>
  <fragment>
    <v-container
      class="grey--text text-lighten-4"
      fluid
    >
      <ArticleHeader
        :deprecated="articleDetail.deprecated"
        :imgUrl="articleDetail.imgUrl"
      ></ArticleHeader>
      <ArticleContent :content="articleDetail.content"></ArticleContent>
    </v-container>
  </fragment>
</template>

<script>
import ArticleHeader from '@/components/main/blog/articleDetail/ArticleHeader'
import ArticleContent from '@/components/main/blog/articleDetail/ArticleContent'
import articleDetailData from '@/testData/articleDetailData'
import { goToTop } from '@/utils/windowSizeUtil'
// import mainUrl from '@/api/mainUrl'
// import axios from '@/utils/axiosConfig'

export default {
  name: 'article-detail',
  data: () => ({
    articleDetail: {},
  }),
  components: { ArticleHeader, ArticleContent },
  methods: {
    init () {
      this.fetchArticleDetail()
    },
    fetchArticleDetail () {
      this.articleDetail = articleDetailData
    },
  },
  created () {
    this.fetchArticleDetail()
  },
  mounted () {
    goToTop(this.$vuetify)
  },
}
</script>

<style>
</style>
