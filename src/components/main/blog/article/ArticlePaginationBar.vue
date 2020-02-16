<template>
  <fragment>
    <v-container
      fluid
      grid-list-xs
      v-if="this.articleListPage.pages > 1"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="12">
          <v-pagination
            :length="this.articleListPage.pages"
            @input="onPageChange"
            circle
            total-visible="5"
            v-model="this.articleListPage.current"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import articleOnePageData from '@/testData/articleOnePageData'

export default {
  name: 'article-pagination-bar',
  computed: {
    ...mapState('blog/', [
      'articleListPage',
    ]),
  },
  methods: {
    ...mapMutations('blog/', [
      'updateArticleListCards',
      'updateArticleListPage',
    ]),
    onPageChange (current) {
      this.fetchArticleSummaryData()
      this.updateArticleListPage({ current })
    },
    fetchArticleSummaryData () {
      // TODO 调用API 传articleListPage分页参数和查询条件
      this.updateArticleListCards(articleOnePageData)
    },
  },
}
</script>

<style>
</style>
