import { ref } from 'vue'

export const useCheckboxGroup = () => {
  const checkList = ref(['北京', '上海', '广州', '深圳'])
  const checkboxGroupVal = ref(['北京', '深圳'])
  const checkboxGroupChange = (val) => {
    console.log('checkbox group change', val)
  }
  return {
    checkList,
    checkboxGroupVal,
    checkboxGroupChange
  }
}
