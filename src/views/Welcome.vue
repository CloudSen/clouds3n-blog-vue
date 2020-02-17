<template>
  <fragment>
    <Terminal :data="this.terminalData"></Terminal>
  </fragment>
</template>

<script>
import Terminal from '@/components/terminal/Terminal'
import testTerminalData from '@/testData/terminalData'

export default {
  name: 'welcome',
  components: {
    Terminal,
  },
  data: () => ({
    terminalData: {},
  }),
  methods: {
    init () {
      this.terminalData = testTerminalData
    },
  },
  created () {
    this.init()
  },
}
</script>

<style>
</style>
