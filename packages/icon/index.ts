import { App } from 'vue'
import Icon from './src/icon.vue'

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
Icon.install = (app: App): void => {
  app.component(Icon.name, Icon) // 把组件注册到全局
}

type IWithInstall<T> = T & {
  install(app: App): void
}
const _Icon: IWithInstall<typeof Icon> = Icon
export default _Icon
