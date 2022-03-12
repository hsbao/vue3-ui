import { computed, getCurrentInstance, WritableComputedRef } from 'vue'
import { ICheckboxProps } from './checkbox.types'

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance()
  const model = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      emit('update:modelValue', val)
    }
  })
  return model
}

const useCheckboxStatus = (
  props: ICheckboxProps,
  model: WritableComputedRef<unknown>
) => {
  const isChecked = computed(() => {
    const value = model.value // 判断当前是否是选中
    // todo...
    return value
  })
  return isChecked
}

const useEvent = () => {
  const { emit } = getCurrentInstance()
  const handleChange = (e: InputEvent) => {
    const target = e.target as HTMLInputElement // 表示当前事件对象就是一个input元素
    const changeValue = target.checked ? true : false
    emit('change', changeValue)
  }
  return handleChange
}

export const useCheckbox = (props: ICheckboxProps) => {
  // 1. 因为单向数据流不能直接修改props，所以要设置一个属性代替modelValue，并且能修改
  const model = useModel(props)

  // 2. 需要给checkbox设置一个checked的状态，选中或是取消需要获取这个checked的状态
  const isChecked = useCheckboxStatus(props, model)

  // 3. 创建一个change事件，可以触发外部在使用组件的时候绑定的@change
  const handleChange = useEvent()

  return {
    model,
    isChecked,
    handleChange
  }
}
