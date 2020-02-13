<template>
  <v-container
    class="grey darken-4 grey--text text-lighten-4"
    fill-height
    grid-list-xs
  >
    <div
      class="content grey darken-4 grey--text text-lighten-4 markdown-body"
      v-html="renderContent"
    ></div>
  </v-container>
</template>

<script>
import md from '@/plugins/markdown-it'
import '@/assets/md-css/md-dark.css'
import 'highlight.js/styles/xt256.css'
import aboutMeData from '@/testData/aboutMeData'

export default {
  name: 'about-me',
  data () {
    return {
      content: '',
    }
  },
  methods: {
    init () {
      this.content = aboutMeData
    },
  },
  computed: {
    renderContent () {
      return md.render(this.content)
    },
  },
  created () {
    this.init()
  },
}
</script>

<style scoped>
.content {
  height: 100%;
}
</style>
