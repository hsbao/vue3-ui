export type Key = string | number
export type DataItem = {
  key: Key
  label: string
  disabled: boolean
}
export type Props = {
  key: string
  label: string
  disabled: string
}

export interface ITransferProps {
  data: DataItem[]
  props: Props
  modelValue: Key[]
}

export interface ITransferPanelProps {
  data: any[]
  props?: Props
}

export interface IPanelState {
  allChecked: boolean
  checked: Key[]
}
