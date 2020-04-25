<template>
  <fragment>
    <Terminal :data="this.terminalConfig"></Terminal>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'
import Terminal from '@/components/terminal/Terminal'

export default {
  name: 'welcome',
  components: {
    Terminal,
  },
  data: () => ({
  }),
  computed: {
    ...mapState('welcome/', ['terminalConfig']),
  },
}
</script>

<style>
</style>
