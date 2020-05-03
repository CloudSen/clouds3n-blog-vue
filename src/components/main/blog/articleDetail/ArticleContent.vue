<template>
  <fragment>
    <v-card tile>
      <div
        class="markdown-body content"
        v-html="renderContent"
      ></div>
    </v-card>
  </fragment>
</template>

<script>
import md from '@/plugins/markdown-it'
import '@/assets/md-css/md-light.css'
import 'highlight.js/styles/atom-one-dark.css'

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

<style scoped>
.content {
  padding: 20px 20px;
}
</style>
