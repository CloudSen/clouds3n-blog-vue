<template>
  <fragment>
    <div v-resize="onResize"></div>
    <template v-for="data in dataList">
      <ParallaxyDiv
        :data="data"
        :key="`${data.id}-parallaxy`"
      ></ParallaxyDiv>
      <TransitionDiv
        :data="data"
        :key="`${data.id}-transition`"
      ></TransitionDiv>
    </template>
    <RightSideScrollButton></RightSideScrollButton>
  </fragment>
</template>

<script>
import ParallaxyDiv from '@/components/main/motto/ParallaxyDiv'
import TransitionDiv from '@/components/main/motto/TransitionDiv'
import RightSideScrollButton from '@/components/common/btn/floatingButton/RightSideScrollButton'
import mottoData from '@/testData/mottoData'

export default {
  name: 'motto',
  components: {
    ParallaxyDiv,
    TransitionDiv,
    RightSideScrollButton,
  },
  data () {
    return {
      isMobile: false,
      dataList: this.sortedDataList(mottoData),
    }
  },
  methods: {
    onResize () {
      if (this.$vuetify.breakpoint.xsOnly) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    sortedDataList (tempDataList) {
      return tempDataList.sort((a, b) => (a.order < b.order ? -1 : 1))
    },
  },
  watch: {
    isMobile (val) {
      this.dataList.forEach((data) => {
        Object.assign(data, { isMobile: val })
      })
    },
  },
}
</script>

<style scoped>
</style>
