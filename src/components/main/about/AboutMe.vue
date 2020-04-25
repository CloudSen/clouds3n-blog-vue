<template>
  <v-container
    fill-height
    grid-list-xs
  >
    <template v-if="!loadingData.active">
      <div class="content markdown-body">
        <div v-html="renderIntroduce"></div>
        <div v-html="renderCode"></div>
        <div v-html="renderContact"></div>
        <div v-html="renderCopyright"></div>
      </div>
    </template>
    <template v-else>
      <CenterLinearLoading :loadingData="this.loadingData"></CenterLinearLoading>
    </template>
  </v-container>
</template>

<script>
import CenterLinearLoading from '@/components/common/loading/CenterLinearLoading'
import md from '@/plugins/markdown-it'
import '@/assets/md-css/md-light.css'
import 'highlight.js/styles/atom-one-dark.css'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'about-me',
  components: {
    CenterLinearLoading,
  },
  data () {
    return {
      introduce: '',
      code: '',
      contact: '',
      copyright: '',
      loadingData: {
        text: '正在加载关于我...',
        active: true,
        absolute: true,
        top: true,
        rounded: false,
      },
    }
  },
  methods: {
    init () {
      this.fetchAboutMe()
    },
    fetchAboutMe () {
      axios.get(mainUrl.aboutMe.getOne)
        .then((response) => {
          const { data } = response
          this.introduce = data.introduce
          this.code = data.code
          this.contact = data.contact
          this.copyright = data.copyright
          this.loadingData.active = false
        }).catch((error) => {
          console.error(error)
        })
    },
  },
  computed: {
    renderIntroduce () {
      return md.render(this.introduce)
    },
    renderCode () {
      return md.render(this.code)
    },
    renderContact () {
      return md.render(this.contact)
    },
    renderCopyright () {
      return md.render(this.copyright)
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
