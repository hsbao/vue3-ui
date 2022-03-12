import { App } from 'vue'
import Checkbox from './src/checkbox.vue'

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
Checkbox.install = (app: App): void => {
  app.component(Checkbox.name, Checkbox) // 把组件注册到全局
}

type IWithInstall<T> = T & {
  install(app: App): void
}
const _Checkbox: IWithInstall<typeof Checkbox> = Checkbox
export default _Checkbox
