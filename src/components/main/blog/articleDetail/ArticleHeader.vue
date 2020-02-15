<template>
  <fragment>
    <v-card
      ripple
      tile
      v-if="this.imgUrl"
    >
      <v-img
        :aspect-ratio="16/9"
        :src="this.imgUrl"
      ></v-img>
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
}
</script>

<style>
</style>
