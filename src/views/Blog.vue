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
          <MatrixCard></MatrixCard>
        </v-col>
        <v-col
          cols="12"
          lg="8"
          md="9"
          offset-lg="1"
          offset-xl="2"
          order="3"
          order-md="1"
          xl="6"
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
import MatrixCard from '@/components/common/matrix/MatrixCard'

export default {
  name: 'blog',
  components: {
    TagList,
    MyInfo,
    MatrixCard,
  },
}
</script>

<style>
</style>
