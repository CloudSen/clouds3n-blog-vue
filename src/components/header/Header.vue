<template>
  <v-app-bar
    absolute
    color="#6A76AB"
    dark
    fade-img-on-scroll
    prominent
    scroll-threshold="500"
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        v-bind="props"
      ></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>Computerize</v-toolbar-title>

    <v-spacer></v-spacer>

    <HeaderItems :items="this.items"></HeaderItems>
  </v-app-bar>
</template>

<script>
import HeaderItems from '@/components/header/HeaderItems'
import headerData from '@/testData/headerData'

export default {
  name: 'top-header',
  components: {
    HeaderItems,
  },
  data: () => ({
    items: [],
  }),
  methods: {
    init () {
      this.items = headerData
    },
  },
  mounted () {
    this.init()
  },
}
</script>

<style scoped>
.v-toolbar__title {
  font-size: 1.25rem;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Hack, Consolas, Monaco, Menlo !important;
}
</style>
