<template>
  <fragment>
    <v-content v-resize="onResize">
      <v-container fill-height>
        <v-row align="center" justify="center">
          <v-col md="8" sm="8" >
            <v-card>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </fragment>
</template>

<script>
import getPageMaxHeight from '@/utils/windowSizeUtil'

export default {
  name: 'terminal',
  data: () => ({
    pageHeight: 0,
    isCombinationMode: false,
    isNormalMode: true,
    userInput: [],
    supportedCombination: ['C', 'T', 'H', 'D', 'L'],
    supportedCommand: ['login', 'clear', 'info', 'screenfetch', 'cloudsen', 'exit'],
  }),
  methods: {
    onResize () {
      this.pageHeight = getPageMaxHeight()
      console.debug(`current page height is: ${this.pageHeight}`)
    },
  },
}
</script>

<style>

</style>
