<template>
  <fragment>
    <v-container
      :key="topic.topicUuid"
      fluid
      v-for="topic in topicList"
    >
      <v-subheader>{{ topic.topicName }}</v-subheader>

      <v-row dense>
        <v-col
          :key="child.topicUuid"
          cols="12"
          lg="3"
          md="4"
          sm="6"
          v-for="child in topic.childList"
          xl="2"
        >
          <v-hover>
            <v-card
              :class="`elevation-${hover ? 24 : 2}`"
              :to="`/home/topic-detail/${child.uuid}`"
              exact
              raised
              ripple
              slot-scope="{ hover }"
            >
              <ProgressImgWithCardTitle
                :imgInfo="{src: child.topicImg, aspectRatio: 16/9, title: child.topicName, titleCss: child.topicNameClass}"
                v-if="child.topicImg"
              ></ProgressImgWithCardTitle>
            </v-card>
          </v-hover>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import ProgressImgWithCardTitle from '@/components/common/img/ProgressImgWithCardTitle'

export default {
  name: 'topic-list',
  props: {
    topicList: {
      type: Array,
      required: true,
    },
  },
  components: {
    ProgressImgWithCardTitle,
  },
}
</script>

<style scoped>
</style>
