import { App } from 'vue'
import Button from '@vui/button'
import Icon from '@vui/icon'

const components = [Button, Icon]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 这样在使用组件库的时候，通过createApp().use(VUI)就可全局注册
export default {
  install
}
