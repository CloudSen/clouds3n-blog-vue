<template>
  <fragment>
    <v-container
      class="grey--text text-lighten-4"
      fluid
    >
      <v-row dense>
        <v-col
          cols="12"
          lg="8"
          md="10"
          offset-lg="2"
          offset-md="1"
          offset-xl="3"
          xl="6"
        >
          <template v-if="!loadingData.active">
            <ArticleHeader
              :deprecated="articleDetail.deprecated"
              :imgUrl="articleDetail.imgUrl"
            ></ArticleHeader>
            <ArticleContent :content="articleDetail.content"></ArticleContent>
          </template>
          <template v-else>
            <CenterLinearLoading :loadingData="this.loadingData"></CenterLinearLoading>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import ArticleHeader from '@/components/main/blog/articleDetail/ArticleHeader'
import ArticleContent from '@/components/main/blog/articleDetail/ArticleContent'
import CenterLinearLoading from '@/components/common/loading/CenterLinearLoading'
import { goToTop } from '@/utils/windowSizeUtil'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'article-detail',
  data: () => ({
    articleDetail: {},
    loadingData: {
      text: '正在加载文章...',
      active: true,
      absolute: true,
      top: true,
      rounded: false,
    },
  }),
  components: { ArticleHeader, ArticleContent, CenterLinearLoading },
  methods: {
    init () {
      this.fetchArticleDetail()
    },
    fetchArticleDetail () {
      axios.get(`${mainUrl.article.getArticleDetail}${this.$route.params.uuid}`)
        .then((response) => {
          const { data } = response
          this.articleDetail = data
          this.loadingData.active = false
        }).catch((error) => console.error(error))
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
