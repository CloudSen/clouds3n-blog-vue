<template>
  <fragment>
    <v-content v-resize="onResize">
      <v-container
        fill-height
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            lg="8"
            md="8"
            sm="8"
            xl="4"
          >
            <v-scroll-y-transition>
              <v-system-bar
                :height="24"
                :lights-out="true"
                class="hack-typing"
                color="orange"
                v-show="show"
              >
                <i class="material-icons">keyboard</i>
                <span>{{this.getTerminalInputMod}}</span>
                <v-spacer></v-spacer>
                <i class="material-icons">wifi</i>
                <i class="material-icons">signal_cellular_4_bar</i>
                <i class="material-icons">battery_full</i>
                <span>{{this.currentTime}}</span>
              </v-system-bar>
            </v-scroll-y-transition>
            <v-scroll-y-transition>
              <v-card
                :height="this.getTerminalHeight"
                class="hack-typing black"
                dark
                v-show="show"
              >
                <v-card-text class="grey--text text--lighten-3 text-xs-left">
                  <p class="red--text font-weight-blod">FBI WARNING</p>
                  <p>Hello, and, again,</p>
                  <p>
                    I am
                    <span class="smile">CloudS3n.</span>
                  </p>
                  <p>Starting fucking awesome AI system...</p>
                  <p>
                    <span class="system-success-info">[ OK ]</span> Checking filesystems
                  </p>
                  <p>
                    <span class="system-success-info">[ OK ]</span> Mounting devices
                  </p>
                  <p>
                    <span class="system-success-info">[ OK ]</span> Auto login
                  </p>
                  <p>
                    > Good Luck, Have fun
                    <span class="smile">:)</span>
                  </p>
                  <p>input "home" go to home page.</p>
                  <p>Arch Linux (tty1).</p>
                  <p>
                    <span class="user-info">[ visitor@GLaDOS ~ ]$&nbsp;&nbsp;</span>
                    <span class="user-input">{{ getUserInput }}</span>
                  </p>
                </v-card-text>
              </v-card>
            </v-scroll-y-transition>
          </v-col>
        </v-row>
        <ParticlesBackground :pageHeight="this.pageHeight"></ParticlesBackground>
      </v-container>
    </v-content>
  </fragment>
</template>

<script>
import getPageMaxHeight from '@/utils/windowSizeUtil'
import getCurrentTime from '@/utils/dateTimeUtil'
import ParticlesBackground from '@/components/terminal/ParticlesBackground'

export default {
  name: 'terminal',
  props: {
    data: {
      type: Object,
    },
  },
  components: {
    ParticlesBackground,
  },
  data: () => ({
    terminalData: {},
    pageHeight: 0,
    isCombinationMode: false,
    isNormalMode: true,
    userInput: [],
    currentTime: getCurrentTime(),
    timerId: null,
    show: false,
  }),
  methods: {
    init () {
      const defaultData = {
        supportedCombination: ['H'],
        supportedCommand: ['home', 'clear', 'info', 'screenfetch', 'cloudsen', 'exit'],
        mobileTerminalHeight: '350px',
        noneMobileTerminalHeight: '550px',
      }
      this.terminalData = this.data
      if (!this.terminalData) {
        this.terminalData = defaultData
      }
      if (!this.terminalData.supportedCombination || this.terminalData.supportedCombination.length === 0) {
        this.terminalData.supportedCombination = defaultData.supportedCombination
      }
      if (!this.terminalData.supportedCommand || this.terminalData.supportedCommand.length === 0) {
        this.terminalData.supportedCommand = defaultData.supportedCommand
      }
      if (!this.terminalData.mobileTerminalHeight || this.terminalData.mobileTerminalHeight === '') {
        this.terminalData.mobileTerminalHeight = defaultData.mobileTerminalHeight
      }
      if (!this.terminalData.noneMobileTerminalHeight || this.terminalData.noneMobileTerminalHeight === '') {
        this.terminalData.noneMobileTerminalHeight = defaultData.noneMobileTerminalHeight
      }
      this.setTimer()
      this.show = true
    },
    setTimer () {
      const thiss = this
      this.timerId = setInterval(() => {
        thiss.currentTime = getCurrentTime()
      }, 1000)
    },
    unsetTimer () {
      if (this.timerId) {
        clearInterval(this.timerId)
      }
    },
    onResize () {
      this.pageHeight = getPageMaxHeight()
    },
    appendInput (keyCode) {
      this.userInput.push(String.fromCharCode(keyCode))
    },
    comfirmInput () {
      const command = this.userInput.join('')
      const index = this.terminalData.supportedCommand.indexOf(command)
      this.clearInput()
      if (index < 0) {
        return
      }
      switch (command) {
        case 'cloudsen':
          break
        case 'home':
          this.$router.push({ name: 'home' })
          break
        case 'exit':
          break
        default:
          break
      }
    },
    deleteInput () {
      if (this.userInput.length > 0) {
        this.userInput.pop()
      }
    },
    clearInput () {
      // length = 0 not working
      this.userInput.splice(0, this.userInput.length)
    },
    clearScreen () {

    },
    startCombination (keyCode) {
      const key = String.fromCharCode(keyCode)
      const index = this.terminalData.supportedCombination.indexOf(key)
      if (index < 0) {
        this.changeToNormalMode()
      } else {
        this.changeToNormalMode()
        if (this.terminalData.supportedCombination[index] === 'H') {
          this.$router.push({ name: 'home' })
        }
        if (this.terminalData.supportedCombination[index] === 'L') {
          this.clearInput()
        }
      }
    },
    changeToCombinationMode () {
      this.isNormalMode = false
      this.isCombinationMode = true
    },
    changeToNormalMode () {
      this.isNormalMode = true
      this.isCombinationMode = false
    },
    onKeyPress (e) {
      const isNumber = e.keyCode >= 48 && e.keyCode <= 57
      const isWord = (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122)
      const isCommaOrDot = (e.keyCode === 44 || e.keyCode === 46)
      const isSpace = e.keyCode === 32
      if (this.isNormalMode) {
        switch (true) {
          case (isNumber || isWord || isCommaOrDot || isSpace):
            this.appendInput(e.keyCode)
            break
          default:
            break
        }
      }
    },
    onKeyDown (e) {
      const isWord = e.keyCode >= 65 && e.keyCode <= 90
      switch (true) {
        // 回车
        case e.keyCode === 13:
          e.preventDefault()
          this.comfirmInput()
          break
        // 回退
        case e.keyCode === 8:
          e.preventDefault()
          this.deleteInput()
          break
        // esc退出模式
        case e.keyCode === 27:
          e.preventDefault()
          this.changeToNormalMode()
          break
        // ctrl进入组合键模式
        case e.keyCode === 17:
          this.changeToCombinationMode()
          break
        // 检测组合键
        case isWord && this.isCombinationMode:
          e.preventDefault()
          this.startCombination(e.keyCode)
          break
        default:
          break
      }
    },
  },
  computed: {
    getUserInput () {
      return this.userInput.join('')
    },
    getTerminalHeight () {
      return this.$vuetify.breakpoint.xsOnly
        ? this.terminalData.mobileTerminalHeight : this.terminalData.noneMobileTerminalHeight
    },
    getTerminalInputMod () {
      return this.isNormalMode ? '普通模式' : '组合键模式'
    },
  },
  mounted () {
    this.init()
    this.onResize()
    this.userInput.length = 0
    this.pageHeight = getPageMaxHeight()
    // 添加按键监听
    window.addEventListener('keypress', this.onKeyPress)
    window.addEventListener('keydown', this.onKeyDown)
  },
  beforeDestroy () {
    this.clearInput()
    // 移除按键监听
    window.removeEventListener('keypress', this.onKeyPress)
    window.removeEventListener('keydown', this.onKeyDown)
    // 移除计时器
    this.unsetTimer()
  },
}
</script>

<style scoped>
.hack-typing {
  z-index: 10;
  overflow-y: auto;
  overflow-x: auto;
}

.hack-typing p {
  font: 14px/1.5 Hack, Consolas, Monaco, Menlo !important;
  /* 刚开始不显示，通过动画显示 */
  width: 0;
  overflow: hidden;
  white-space: nowrap;
}

.hack-typing span {
  font: 14px/1.5 Hack, Consolas, Monaco, Menlo !important;
}

/* 第一行刚开始有高度 */
.hack-typing p:nth-child(1n + 2) {
  height: 0;
}

.user-info {
  color: bisque;
}

.system-success-info {
  color: #2e7d32;
}

.smile {
  color: orange;
}

/* 启用动画 */
/* FBI WARNING */
.hack-typing p:nth-child(1) {
  animation: blink-caret 0.5s linear 0s 6 normal,
    typing 1s ease 3s 1 normal forwards;
}

/* hello */
.hack-typing p:nth-child(2) {
  animation: typing 1s ease 4s 1 normal forwards;
}

/* clouds3n */
.hack-typing p:nth-child(3) {
  animation: typing 1s ease 5s 1 normal forwards;
}

/* starting... */
.hack-typing p:nth-child(4) {
  animation: typing 1s ease 6s 1 normal forwards;
}

/* checking... */
.hack-typing p:nth-child(5) {
  animation: typing 3s ease 7s 1 normal forwards;
}

/* mounting... */
.hack-typing p:nth-child(6) {
  animation: typing 3s ease 8s 1 normal forwards;
}

/* login... */
.hack-typing p:nth-child(7) {
  animation: typing 3s ease 9s 1 normal forwards;
}

/* good luck */
.hack-typing p:nth-child(8) {
  animation: typing 0.5s ease 10s 1 normal forwards;
}

/* help */
.hack-typing p:nth-child(9) {
  animation: typing 0.5s ease 10.5s 1 normal forwards;
}

/* arch */
.hack-typing p:nth-child(10) {
  animation: typing 0.5s ease 11s 1 normal forwards;
}

/* user */
.hack-typing p:nth-child(11) {
  animation: typing 0.5s ease 11.5s 1 normal forwards;
}

/* 光标 */
.hack-typing .user-input {
  animation: blink-caret 0.5s linear 12s infinite normal;
}

/* 打字动画 */
@keyframes typing {
  from {
    width: 0px;
    height: 21px;
  }

  to {
    width: 100%;
    height: 21px;
    border: none;
  }
}

/* 光标闪烁动画 */
@keyframes blink-caret {
  from,
  to {
    border-right: 4px solid #20c20e;
  }
  50% {
    border-color: transparent;
  }
}

/* terminal 滚动条样式 */
.hack-typing::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #000;
}

.hack-typing::-webkit-scrollbar {
  width: 10px;
  background-color: #000;
}

.hack-typing::-webkit-scrollbar-thumb {
  background-color: #20c20e;
  border: 2px solid #20c20e;
}
</style>
