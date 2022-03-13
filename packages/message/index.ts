import { App } from 'vue'
import Message from './src/message'
;(Message as any).install = (app: App): void => {
  // 为了兼容vue2的写法，否则无法在this上调用
  // 因为vue3中还可以用optionAPI的写法
  app.config.globalProperties.$message = Message
}

// vue3可以直接引入，直接调用
export { Message }

export default Message
