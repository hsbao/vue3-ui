import { App } from 'vue'
import Button from '@vui/button'
import Icon from '@vui/icon'
import ButtonGroup from '@vui/button-group'
import Col from '@vui/col'
import Row from '@vui/row'
import Checkbox from '@vui/checkbox'
import CheckboxGroup from '@vui/checkbox-group'

const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  CheckboxGroup,
  Checkbox
]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 这样在使用组件库的时候，通过createApp().use(VUI)就可全局注册
export default {
  install
}
