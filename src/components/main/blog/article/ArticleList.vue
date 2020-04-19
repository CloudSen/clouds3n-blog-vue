<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-row dense>
      <v-col
        :key="card.id"
        cols="12"
        lg="4"
        md="6"
        sm="12"
        v-for="card in this.articleListCards"
        xl="4"
      >
        <ArticleCards :card="card"></ArticleCards>
      </v-col>
      <v-col
        cols="12"
        v-if="!this.articleListCards || this.articleListCards.length === 0"
      >
        <v-card color="red darken-2">
          <v-card-text>网络错误</v-card-text>
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
  components: { ArticleCards },
  computed: {
    ...mapState('blog/', ['articleListCards']),
  },
}
</script>

<style>
</style>
