<template>
  <fragment>
    <v-hover>
      <v-card
        :class="`elevation-${hover ? 24 : 2}`"
        :color="card.color ? card.color : `white`"
        :disabled="card.disabled"
        :to="`/home/articles/${card.uuid}`"
        exact
        raised
        ripple
        slot-scope="{ hover }"
      >
        <ProgressImg
          :imgInfo="{src: card.imgUrlMd, aspectRatio: 16/9}"
          v-if="card.imgUrlMd"
        ></ProgressImg>
        <v-card-title>
          <div>
            <span class="card-title">{{card.title}}</span>
          </div>
        </v-card-title>
        <v-card-text
          :class="card.summaryTextColor ? card.summaryTextColor : `black--text`"
          class="hackFont"
          v-if="card.summary"
        >{{card.summary}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-container
            class="pa-0"
            fluid
            grid-list-xs
            text
          >
            <v-row
              justify="end"
              no-gutters
              v-if="card.tags"
            >
              <ArticleTagsList :tags="card.tags"></ArticleTagsList>
            </v-row>
            <v-row
              justify="end"
              v-if="card.updateTime"
            >
              <v-col class="text-right">
                <v-btn
                  :class="card.summaryTextColor ? card.summaryTextColor : `black--text`"
                  text
                >
                  <v-icon left>access_time</v-icon>
                  <span class="hackFont">{{parseTime}}</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-hover>
  </fragment>
</template>

<script>
import ArticleTagsList from '@/components/main/blog/article/ArticleTagsList'
import ProgressImg from '@/components/common/img/ProgressImg'
import { parseCurrentDataTime } from '@/utils/dateTimeUtil'

export default {
  name: 'article-cards',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  components: { ArticleTagsList, ProgressImg },
  computed: {
    parseTime () {
      return parseCurrentDataTime(this.card.updateTime)
    },
  },
}
</script>

<style scoped>
.no-border {
  border: none !important;
}

.card-title {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: "微软雅黑", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", "PingFang SC", "Helvetica Neue", Helvetica, Arial,
    sans-serif !important;
}
</style>
