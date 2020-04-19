<template>
  <fragment>
    <v-timeline-item
      :color="item.color"
      :key="item.id"
      fill-dot
      large
      v-for="item in itemList"
    >
      <template v-slot:opposite>
        <span>{{parseTime(item.opposite)}}</span>
      </template>
      <v-card
        :color="item.color"
        class="elevation-4"
      >
        <v-card-title class="headline white--text">{{item.title}}</v-card-title>
        <v-card-text class="white--text">{{item.content}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </fragment>
</template>

<script>
import { parseCurrentDataTime } from '@/utils/dateTimeUtil'

export default {
  name: 'line-item',
  props: {
    itemList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    parseTime (time) {
      return parseCurrentDataTime(time)
    },
  },
}
</script>

<style>
</style>
