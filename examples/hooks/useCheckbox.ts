import { ref } from 'vue'

export const useCheckbox = () => {
  const checkVal = ref(true)
  const handleChange = (val) => {
    console.log('checkbox change', val)
  }
  return {
    checkVal,
    handleChange
  }
}
