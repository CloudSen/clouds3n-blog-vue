<template>
  <fragment>
    <template v-for="(tag, index) in tags">
      <v-btn
        :color="tag.color"
        :key="`${tag.id}-${index}`"
        @click.stop
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
}
</script>

<style>
</style>
