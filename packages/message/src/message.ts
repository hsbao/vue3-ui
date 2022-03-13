import { createVNode, render, VNode } from 'vue'
import { IMessageParams } from './message.types'

import MessageComponent from './message.vue'

const instances: VNode[] = []

const Message = (options: IMessageParams) => {
  if (typeof options === 'string') {
    options = {
      offset: 20,
      message: options
    }
  }
  // 到这里，options肯定就是一个对象了

  let offset = options && options.offset ? options.offset : 20
  instances.forEach((vm) => {
    offset += vm.el!.offsetHeight + 20 // 创建message组件的时候，计算偏移量
  })

  const userClose = options?.onClose
  const opts = {
    ...options,
    offset,
    onClose() {
      // 这里移除的时候，需要重新计算一下位置，把当前的位置上移，并且把当前实例从instances中移除  todo...

      userClose?.()
    }
  }

  // 1. message应该渲染到body上
  // 2. createVNode(component, props)，然后调用render(vnode, container)挂载到对应的位置
  const container = document.createElement('div')
  const vm = createVNode(MessageComponent, opts as any)

  // 这里相当于<Message @onDestory="xxx">，触发message组件里面的$emit('destory')
  vm.props!.onDestory = () => {
    render(null, container) // 这里的render会移除message对应的dom
  }

  render(vm, container) // 把message渲染到div中，再添加到body上
  document.body.appendChild(container.firstElementChild!)
  console.log(vm)
  instances.push(vm)
}

export default Message
