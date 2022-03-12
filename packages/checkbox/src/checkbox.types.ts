export interface ICheckboxProps {
  indeterminate?: boolean // 是否半选
  checked?: boolean // 是否选中
  name?: boolean // 原生的name
  disabled?: boolean // 是否禁用
  label?: boolean | string | number // 在group中使用
  modelValue?: boolean | string | number // 绑定checkbox的值
}
