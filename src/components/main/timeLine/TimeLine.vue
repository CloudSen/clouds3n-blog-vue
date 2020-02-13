<template>
  <v-timeline>
    <LineItem :itemList="itemData"></LineItem>
  </v-timeline>
</template>

<script>
import LineItem from '@/components/main/timeLine/LineItem'
import timeLineData from '@/testData/timeLineData'

export default {
  name: 'timeline',
  components: {
    LineItem,
  },
  data: () => ({
    itemData: timeLineData,
  }),
}
</script>

<style>
</style>
