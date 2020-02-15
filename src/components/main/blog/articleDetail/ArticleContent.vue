<template>
  <fragment>
    <v-card
      ripple
      tile
    >
      <div
        class="grey darken-4 grey--text text-lighten-4 markdown-body"
        v-html="renderContent"
      ></div>
    </v-card>
  </fragment>
</template>

<script>
import md from '@/plugins/markdown-it'
import '@/assets/md-css/md-dark.css'
import 'highlight.js/styles/xt256.css'

export default {
  name: 'article-content',
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    renderContent () {
      return md.render(this.content ? this.content : '# 无法读取文章内容')
    },
  },
}
</script>

<style>
</style>
