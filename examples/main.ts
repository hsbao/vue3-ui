import { createApp } from 'vue'
import VUI from 'v-ui' // 全局引入
// import Button from '../lib/button' // 按需引入
// import Icon from '../lib/icon'
import 'theme-chalk/lib/index.css'

import App from './App.vue'

createApp(App).use(VUI).mount('#app')
