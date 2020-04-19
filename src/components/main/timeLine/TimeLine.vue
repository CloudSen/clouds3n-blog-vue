<template>
  <v-timeline>
    <LineItem :itemList="timeLineList"></LineItem>
  </v-timeline>
</template>

<script>
import LineItem from '@/components/main/timeLine/LineItem'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'timeline',
  components: {
    LineItem,
  },
  data: () => ({
    timeLineList: [],
  }),
  methods: {
    init () {
      this.fetchTimeLineData()
    },
    fetchTimeLineData () {
      axios.get(mainUrl.timeLine.getAll)
        .then((response) => {
          const { data } = response
          this.timeLineList = data
        }).catch((error) => console.log(error))
    },
  },
  mounted () {
    this.init()
  },
}
</script>

<style>
</style>
