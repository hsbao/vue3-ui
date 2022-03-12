import { App } from 'vue'
import ButtonGroup from '../button/src/button-group.vue'

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup) // 把组件注册到全局
}

type IWithInstall<T> = T & {
  install(app: App): void
}
const _ButtonGroup: IWithInstall<typeof ButtonGroup> = ButtonGroup
export default _ButtonGroup
