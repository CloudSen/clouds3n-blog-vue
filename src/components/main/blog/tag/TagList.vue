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
import ArticleTagList from '@/components/main/blog/article/ArticleTagsList'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'tag-list',
  components: {
    ArticleTagList,
  },
  data: () => ({
    tagList: [],
  }),
  methods: {
    init () {
      this.fetchAllTags()
    },
    fetchAllTags () {
      axios.get(mainUrl.tag.getAll).then((response) => {
        const { data } = response
        this.tagList = data
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  created () {
    this.init()
  },
}
</script>

<style>
</style>
