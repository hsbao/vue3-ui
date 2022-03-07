import { createApp } from 'vue'
 import VUI from '../lib/index.esm.js' // 全局引入
// import Button from '../lib/button' // 按需引入
// import Icon from '../lib/icon'
import 'theme-chalk/src/index.scss'

import App from './App.vue'

createApp(App).use(VUI).mount('#app')
