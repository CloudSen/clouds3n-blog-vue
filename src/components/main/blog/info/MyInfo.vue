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
              small
            >
              <v-icon dark>mdi-android</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
import { mapState } from 'vuex'
import ProgressImgWithCardTitle from '@/components/common/ProgressImgWithCardTitle'

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
