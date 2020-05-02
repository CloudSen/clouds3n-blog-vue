<template>
  <fragment>
    <TopicList :topicList="this.topicList"></TopicList>
  </fragment>
</template>

<script>
import TopicList from '@/components/main/topic/TopicList'
import mainUrl from '@/api/mainUrl'
import axios from '@/utils/axiosConfig'

export default {
  name: 'topic',
  components: { TopicList },
  data: () => ({
    topicList: [],
  }),
  methods: {
    init () {
      this.fetchTopicData()
    },
    fetchTopicData () {
      axios.get(mainUrl.topic.getTopicList).then((response) => {
        const { data } = response
        this.topicList = data
      }).catch((error) => {
        console.log(error)
      })
    },
  },
  mounted () {
    this.init()
  },
}
</script>

<style scoped>
</style>
