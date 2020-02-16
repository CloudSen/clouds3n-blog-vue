<template>
  <fragment>
    <v-container fluid>
      <v-row dense>
        <v-col
          cols="12"
          lg="2"
          md="3"
          order="2"
          xl="2"
        >
          <TagList></TagList>
          <MyInfo></MyInfo>
        </v-col>
        <v-col
          cols="12"
          lg="10"
          md="9"
          order="3"
          order-md="1"
          xl="10"
        >
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </fragment>
</template>

<script>
import TagList from '@/components/main/blog/tag/TagList'
import MyInfo from '@/components/main/blog/info/MyInfo'

export default {
  name: 'blog',
  components: {
    TagList,
    MyInfo,
  },
}
</script>

<style>
</style>
