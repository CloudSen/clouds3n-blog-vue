<template>
  <v-container
    fill-height
    grid-list-xs
    pb-0
    pt-0
  >
    <TimeLine></TimeLine>
  </v-container>
</template>

<script>
import TimeLine from '@/components/main/timeLine/TimeLine'

export default {
  name: 'timelines-view',
  components: { TimeLine },
  data: () => ({}),
}
</script>

<style>
</style>
