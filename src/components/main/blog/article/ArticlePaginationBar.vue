<template>
  <fragment>
    <v-container
      fluid
      grid-list-xs
      v-if="this.articleListPage && this.articleListPage.pages > 1"
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
            v-model="current"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'article-pagination-bar',
  computed: {
    ...mapState('blog/', [
      'articleListPage',
    ]),
    current: {
      get () {
        return this.$store.state.blog.articleListPage.current
      },
      set (value) {
        this.$store.commit('blog/updateArticleListPage', { current: value })
      },
    },
  },
  methods: {
    ...mapMutations('blog/', [
      'updateArticleListCards',
      'updateArticleListPage',
      'clearArticleListCards',
    ]),
    ...mapMutations('header/', ['updateProgressData']),
    onPageChange (current) {
      this.clearArticleListCards()
      this.updateProgressData({ active: true })
      this.updateArticleListPage({ current })
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
        }).catch((error) => console.log(error))
    },
  },
}
</script>

<style>
</style>
