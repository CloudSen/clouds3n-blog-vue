<template>
  <fragment>
    <v-card
      ripple
      tile
      v-if="this.imgUrl"
    >
      <ProgressImg :imgInfo="{src:this.imgUrl, aspectRatio: 16/9}"></ProgressImg>
    </v-card>
    <v-card
      ripple
      tile
      v-if="this.deprecated"
    >
      <v-alert
        :value="this.deprecated"
        prominent
        type="warning"
      >当前日志已有半年未更新，可能与最新的内容有脱节！</v-alert>
    </v-card>
  </fragment>
</template>

<script>
import ProgressImg from '@/components/common/img/ProgressImg'

export default {
  name: 'article-header',
  props: {
    imgUrl: {
      type: String,
      required: false,
    },
    deprecated: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    ProgressImg,
  },
}
</script>

<style>
</style>
