import { App } from 'vue'
import Transfer from './src/transfer.vue'

// createApp().use(Transfer) --> 就会调用install方法
// createApp() --> app
Transfer.install = (app: App): void => {
  app.component(Transfer.name, Transfer) // 把组件注册到全局
}

type IWithInstall<T> = T & {
  install(app: App): void
}
const _Transfer: IWithInstall<typeof Transfer> = Transfer
export default _Transfer
