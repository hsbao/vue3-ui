import { computed, getCurrentInstance, WritableComputedRef, inject } from 'vue'
import { ICheckboxProps, ICheckboxGroupProps } from './checkbox.types'

const useCheckboxGroupProvide = () => {
  const checkboxGroupProvide = inject<ICheckboxGroupProps>('VCheckboxGroup', {})
  const isGroup = checkboxGroupProvide.name === 'VCheckboxGroup' // 判断是否是checkbox-group
  return {
    isGroup,
    checkboxGroupProvide
  }
}

const useModel = (props: ICheckboxProps) => {
  const { emit } = getCurrentInstance()

  const { isGroup, checkboxGroupProvide } = useCheckboxGroupProvide()

  // computed和ref类似，返回的是一个对象，要从.value上取值
  const store = computed(() => {
    return checkboxGroupProvide
      ? checkboxGroupProvide.modelValue?.value
      : props.modelValue
  })

  const model = computed({
    get() {
      // 如果只是checkbox，value就是一个boolean
      // 如果是checkbox-group，value就是一个数组['北京', '深圳']
      return isGroup ? store.value : props.modelValue
    },
    set(val) {
      // 修改值的时候，如果是checkbox-group的情况，直接触发provide传进来的事件，触发checkbox-group的更新
      if (isGroup) {
        return checkboxGroupProvide.changeEvent(val)
      }
      emit('update:modelValue', val) // 这里是只有checkbox的情况，只更新自己的值
    }
  })
  return model
}

const useCheckboxStatus = (
  props: ICheckboxProps,
  model: WritableComputedRef<unknown>
) => {
  const isChecked = computed(() => {
    // 判断当前是否是选中
    // 如果只是checkbox，value就是一个boolean
    // 如果是checkbox-group，value就是一个数组['北京', '深圳']
    const value = model.value
    if (Array.isArray(value)) {
      return value.includes(props.label)
    } else {
      return value
    }
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
