import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = (): Option[] => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const transferProps = {
  key: 'key',
  label: 'label',
  disabled: 'disabled'
}

export const useTransfer = () => {
  return {
    transferData: ref(generateData()),
    rightValue: ref([1, 4]),
    transferProps
  }
}
