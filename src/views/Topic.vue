<template>
  <fragment>
    <TopicList :topicList="this.topicList"></TopicList>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'
import TopicList from '@/components/main/topic/TopicList'

export default {
  name: 'topic',
  components: { TopicList },
  computed: {
    ...mapState('topic', ['topicList']),
  },
}
</script>

<style scoped>
</style>
