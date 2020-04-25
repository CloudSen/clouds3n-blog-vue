<template>
  <v-app-bar
    app
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

    <v-app-bar-nav-icon @click.stop="triggerDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Computerize</v-toolbar-title>

    <v-spacer></v-spacer>

    <HeaderItems :items="this.headerMenu"></HeaderItems>
  </v-app-bar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import HeaderItems from '@/components/header/HeaderItems'
import TRIGGER_DRAWER from './constants/mutationType'

export default {
  name: 'top-header',
  components: {
    HeaderItems,
  },
  data: () => ({
    items: [],
  }),
  computed: {
    ...mapState('header', ['headerMenu']),
  },
  methods: {
    ...mapMutations('navDrawer/', [TRIGGER_DRAWER]),
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
