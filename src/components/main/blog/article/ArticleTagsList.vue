<template>
  <fragment>
    <template v-for="(tag, index) in tags">
      <v-btn
        :color="tag.color"
        :key="`${tag.uuid}-${index}`"
        @click.native.stop="onClick(tag.uuid)"
        ripple
      >
        <i
          class="material-icons"
          left
        >loyalty</i>
        <span class="hackFont">{{tag.name}}</span>
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
      console.debug(`点击了标签${uuid}`)
    },
  },
}
</script>

<style>
</style>
