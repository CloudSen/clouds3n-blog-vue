<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-row dense>
      <v-col
        :key="card.uuid"
        :lg="colCss.lg"
        :md="colCss.md"
        :sm="colCss.sm"
        :xl="colCss.xl"
        cols="12"
        v-for="card in this.articleListCards"
      >
        <ArticleCards :card="card"></ArticleCards>
      </v-col>
      <v-col
        cols="12"
        v-if="!this.articleListCards || this.articleListCards.length === 0"
      >
        <v-card :color=" this.progressData ? 'white' : 'red darken-2'">
          <v-card-text>{{ this.progressData ? '正在加载文章...' : '网络错误' }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import ArticleCards from '@/components/main/blog/article/ArticleCards'

export default {
  name: 'article-list',
  props: {
    colCss: {
      type: Object,
      required: true,
    },
  },
  components: { ArticleCards },
  computed: {
    ...mapState('blog/', ['articleListCards']),
    ...mapState('header/', ['progressData']),
  },
}
</script>

<style>
</style>
