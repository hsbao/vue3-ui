import { computed, getCurrentInstance, watch } from 'vue'
import { ITransferPanelProps, IPanelState } from './transfer.types'

export const useCheck = (
  props: ITransferPanelProps,
  panelState: IPanelState
) => {
  const { emit } = getCurrentInstance()

  const keyProp = computed(() => props.props.key)
  const labelProp = computed(() => props.props.label)
  const disabledProp = computed(() => props.props.disabled)

  const checkableData = computed(() => {
    return props.data.filter((item) => !item[disabledProp.value])
  })
  const handleCheckedAllChange = (val) => {
    panelState.allChecked = val
    panelState.checked = val
      ? checkableData.value.map((item) => item[keyProp.value])
      : []
  }

  // watch的第一个参数尽量放一个函数，节约性能
  watch(
    () => panelState.checked,
    () => {
      // 获取所有的key
      const checkKeys = checkableData.value.map((item) => item[keyProp.value])
      // 看看panelState.checked是否包含对应的key
      panelState.allChecked =
        checkKeys.length &&
        checkKeys.every((key) => panelState.checked.includes(key))

      emit('checked-change', panelState.checked)
    }
  )

  watch(
    () => props.data,
    () => {
      panelState.checked = []
    }
  )

  return {
    keyProp,
    labelProp,
    disabledProp,
    handleCheckedAllChange
  }
}
