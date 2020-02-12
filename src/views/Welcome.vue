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
      console.debug(`test terminal data: ${JSON.stringify(testTerminalData)}`)
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
