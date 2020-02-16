<template>
  <fragment>
    <v-row dense>
      <v-col cols="12">
        <v-card v-resize="onResize">
          <v-row dense>
            <v-col
              class="py-0"
              cols="12"
            >
              <canvas
                id="matrix"
                style="width:100%;height:100%;"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
export default {
  name: 'matrix-card',
  data: () => ({
    mounted: false,
    canvas: null,
    ctx: null,
    intervalId: null,
    width: 0,
    height: 0,
    cols: null,
    ypos: null,
    chars: Array.from('01234567爱89ABCDEFGHIJKLMN芸OPQRSTUVWXYZ森'),
  }),
  mounted () {
    this.initCanvas()
    this.renderMatrix()
    this.mounted = true
  },
  beforeDestroy () {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  },
  methods: {
    initCanvas () {
      const canvas = document.getElementById('matrix')
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#000'
      ctx.fillRect(0, 0, ctx.width, ctx.height)
      this.canvas = canvas
      this.ctx = ctx
      this.width = canvas.width
      this.height = canvas.height
      this.cols = Math.floor(this.width / 20) + 1
      this.ypos = Array(this.cols).fill(0)
    },
    matrix () {
      const that = this
      this.ctx.fillStyle = '#0001'
      this.ctx.fillRect(0, 0, this.width, this.height)
      this.ctx.fillStyle = '#0f0'
      this.ctx.font = '15pt hack'
      this.ypos.forEach((y, ind) => {
        const text = that.chars[Math.floor(Math.random() * that.chars.length)]
        const x = ind * 20
        that.ctx.fillText(text, x, y)
        if (y > 100 + Math.random() * 10000) {
          that.ypos[ind] = 0
        } else {
          that.ypos[ind] = y + 20
        }
      })
    },
    renderMatrix () {
      this.intervalId = setInterval(this.matrix, 60)
    },
    onResize () {
      if (this.mounted) {
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.cols = Math.floor(this.width / 20) + 1
        this.ypos = Array(this.cols).fill(0)
      }
    },
  },
}
</script>

<style>
</style>
