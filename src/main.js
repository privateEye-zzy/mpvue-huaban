import Vue from 'vue'
import App from './App'
import { openWin, backBeaforWin, Ajax } from './utils/common'
import store from './utils/store'
import './css/common.css'
import './css/iconfont.css'

Vue.config.productionTip = false
App.mpType = 'app'

// 把通用方法挂载到Vue原型上
Vue.prototype.$openWin = openWin
Vue.prototype.$backBeaforWin = backBeaforWin
Vue.prototype.$ajax = Ajax
// 把store挂载到Vue原型上
Vue.prototype.$store = store

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/index/main',
      'pages/find/main',
      'pages/self/main',
      'pages/search/main',
      'pages/list/main',
      'pages/detail/main',
      'pages/error/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'weChat',
      navigationBarTextStyle: 'black'
    },
     tabBar: {
      borderStyle: 'white',
      backgroundColor: '#fff',
      selectedColor: '#2c2c2c',
      color: '#8a8a8a',
      list: [{
        pagePath: "pages/index/main",
        iconPath: 'static/images/tab1.png',
        selectedIconPath: 'static/images/tab1-on.png',
        text: "首页"
      },{
        pagePath: "pages/find/main",
        selectedIconPath: 'static/images/tab2-on.png',
        iconPath: 'static/images/tab2.png',
        text: "发现"
      },{
        pagePath: "pages/self/main",
        selectedIconPath: 'static/images/tab3-on.png',
        iconPath: 'static/images/tab3.png',
        text: "我的"
      }]
    }
  }
}
