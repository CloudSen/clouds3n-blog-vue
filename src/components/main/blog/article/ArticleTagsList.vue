<template>
  <fragment>
    <template v-for="(tag, index) in tags">
      <v-btn
        :color="tag.color"
        :key="`${tag.uuid}-${index}`"
        @click.native.stop="onClick(tag.uuid)"
        class="mx-1 my-1"
        ripple
        small
      >
        <i
          class="material-icons"
          left
        >loyalty</i>
        <span class="hackFont">{{tag.name}}</span>
      </v-btn>
    </template>
    <template v-if="!tags || tags.length === 0">
      <v-btn
        @click.native.stop="onClick(tag.uuid)"
        class="mx-1 my-1"
        color="red darken-2"
        key="error404error404"
        ripple
        small
      >
        <i
          class="material-icons"
          left
        >loyalty</i>
        <span class="hackFont">网络错误</span>
      </v-btn>
    </template>
  </fragment>
</template>

<script>
export default {
  name: 'article-tags-list',
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onClick (uuid) {
      return uuid
    },
  },
}
</script>

<style>
</style>
