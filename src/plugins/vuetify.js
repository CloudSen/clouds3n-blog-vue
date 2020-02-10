import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// 确保使用了css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

export default new Vuetify({
  // 使用 Material Design Icons
  icons: {
    iconfont: 'md',
  },
})
