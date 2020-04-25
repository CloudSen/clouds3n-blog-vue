<template>
  <fragment>
    <v-app dark>
      <template v-if="!loadingData.active">
        <router-view />
      </template>
      <template v-else>
        <CenterLinearLoading :loadingData="this.loadingData"></CenterLinearLoading>
      </template>
    </v-app>
  </fragment>
</template>

<script>
import { mapMutations } from 'vuex'
import CenterLinearLoading from '@/components/common/loading/CenterLinearLoading'
import asideUrl from '@/api/asideUrl'
import headerUrl from '@/api/headerUrl'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'app',
  components: {
    CenterLinearLoading,
  },
  data: () => ({
    loadingData: {
      text: '正在加载应用数据...',
      active: true,
    },
  }),
  methods: {
    ...mapMutations('navDrawer/', [
      'cacheDrawerMenu',
      'updateLoading',
    ]),
    ...mapMutations('header/', [
      'saveHeaderMenu',
    ]),
    ...mapMutations('blog/', [
      'saveTagList',
      'saveAboutMe',
    ]),
    init () {
      this.fetchDrawerMenu()
      this.fetchHeaderMenus()
      this.fetchAllTags()
      this.fetchAboutMe()
    },
    fetchDrawerMenu () {
      axios.get(asideUrl.menu.getAll)
        .then((response) => {
          const { data } = response
          this.cacheDrawerMenu(data)
          this.updateLoading({ active: false })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    fetchHeaderMenus () {
      axios.get(headerUrl.menu.getAll)
        .then((response) => {
          const { data } = response
          this.saveHeaderMenu(data)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    fetchAllTags () {
      axios.get(mainUrl.tag.getAll).then((response) => {
        const { data } = response
        this.saveTagList(data)
      }).catch((error) => {
        console.log(error)
      })
    },
    fetchAboutMe () {
      axios.get(mainUrl.aboutMe.getOne)
        .then((response) => {
          const { data } = response
          const aboutMeData = {
            introduce: data.introduce,
            code: data.code,
            contact: data.contact,
            copyright: data.copyright,
          }
          this.saveAboutMe(aboutMeData)
          this.loadingData.active = false
        }).catch((error) => {
          console.error(error)
        })
    },
  },
  created () {
    this.init()
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-size: 14px/1.5;
  font-family: "\5b8b\4f53", Arial, "WenQuanYi Micro Hei", "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", sans-serif;
}

.hackFont {
  font: 14px/1.5 Hack, Consolas, Monaco, Menlo !important;
}

/* 滚动条样式 start */
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

body::-webkit-scrollbar {
  width: 5px;
  background-color: #000;
}

body::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 2px solid #20c20e;
}

pre::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

pre::-webkit-scrollbar {
  height: 3px;
  background-color: #000;
}

pre::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 1px solid #20c20e;
}
/* 滚动条样式 end */
</style>
