<template>
  <fragment>
    <v-row dense>
      <v-col cols="12">
        <v-card class="grey darken-4">
          <ProgressImgWithCardTitle :imgInfo="this.myInfo.avatar"></ProgressImgWithCardTitle>
          <v-card-actions class="align-center justify-center">
            <v-btn
              color="light-blue darken-2"
              dark
              fab
              href="https://github.com/CloudSen"
              link
              small
            >
              <v-img src="https://s2.ax1x.com/2020/02/16/3pbK39.png"></v-img>
            </v-btn>
            <v-btn
              color="light-blue darken-2"
              dark
              fab
              link
              small
            >
              <v-img
                height="40"
                src="https://s2.ax1x.com/2020/02/16/3pqF8H.png"
                width="40"
              ></v-img>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'
import ProgressImgWithCardTitle from '@/components/common/img/ProgressImgWithCardTitle'

export default {
  name: 'my-info',
  components: {
    ProgressImgWithCardTitle,
  },
  computed: {
    ...mapState('blog/', ['myInfo']),
  },
}
</script>

<style>
</style>
