import { App } from 'vue'
import CheckboxGroup from '../checkbox/src/checkbox-group.vue'

// createApp().use(Button) --> 就会调用install方法
// createApp() --> app
CheckboxGroup.install = (app: App): void => {
  app.component(CheckboxGroup.name, CheckboxGroup) // 把组件注册到全局
}

type IWithInstall<T> = T & {
  install(app: App): void
}
const _CheckboxGroup: IWithInstall<typeof CheckboxGroup> = CheckboxGroup
export default _CheckboxGroup
