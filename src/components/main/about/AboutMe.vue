<template>
  <v-container
    fill-height
    grid-list-xs
  >
    <div class="content markdown-body">
      <div v-html="renderIntroduce"></div>
      <div v-html="renderCode"></div>
      <div v-html="renderContact"></div>
      <div v-html="renderCopyright"></div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import md from '@/plugins/markdown-it'
import '@/assets/md-css/md-light.css'
import 'highlight.js/styles/atom-one-dark.css'

export default {
  name: 'about-me',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('blog/', ['aboutMe']),
    renderIntroduce () {
      return md.render(this.aboutMe.introduce)
    },
    renderCode () {
      return md.render(this.aboutMe.code)
    },
    renderContact () {
      return md.render(this.aboutMe.contact)
    },
    renderCopyright () {
      return md.render(this.aboutMe.copyright)
    },
  },
}
</script>

<style scoped>
.content {
  height: 100%;
}
</style>
