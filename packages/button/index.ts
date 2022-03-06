import { App } from 'vue'
import Button from './src/button.vue'

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
Button.install = (app: App): void => {
  app.component(Button.name, Button) // 把组件注册到全局
}

type IWithInstall<T> = T & {
  install(app: App): void
}
const _Button: IWithInstall<typeof Button> = Button
export default _Button
