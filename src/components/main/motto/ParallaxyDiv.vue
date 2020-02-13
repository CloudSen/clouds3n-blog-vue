<template>
  <div
    :key="data.id"
    :style="data.isMobile ? data.mobileStyle : data.style"
    v-if="data.type === 0"
  >
    <template v-if="data.content">
      <v-container
        fill-height
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <span class="title font-weight-medium grey--text text--lighten-5">{{data.content}}</span>
          </v-col>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
export default {
  name: 'parallaxyDiv',
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
