import { Message } from '@vui/message'

export const useButton = () => {
  const handleClick = (e) => {
    console.log('click')
  }

  const openMessageByVue3 = () => {
    Message('123')
  }

  return {
    handleClick,
    openMessageByVue3
  }
}
