<template>
  <div
    :key="data.id"
    :style="data.style"
    v-if="data.type === 1"
  >
    <template v-if="data.content">
      <v-container
        fill-height
        fluid
        text-xs-center
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <span class="title font-weight-black font-italic grey--text text--lighten-5">{{data.content}}</span>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  name: 'transitionDiv',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
