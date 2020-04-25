<template>
  <fragment>
    <v-row dense>
      <v-col cols="12">
        <v-card color="grey darken-4">
          <v-card-actions>
            <v-row dense>
              <v-col>
                <ArticleTagList :tags="this.tagList"></ArticleTagList>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'
import ArticleTagList from '@/components/main/blog/article/ArticleTagsList'

export default {
  name: 'tag-list',
  components: {
    ArticleTagList,
  },
  data: () => ({
  }),
  computed: {
    ...mapState('blog/', ['tagList']),
  },
}
</script>

<style>
</style>
