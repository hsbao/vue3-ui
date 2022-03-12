<template>
  <div class="v-checkbox">
    <span class="v-checkbox__input" :class="isChecked && 'is-checked'">
      <input
        type="checkbox"
        v-model="model"
        :checked="isChecked"
        :name="name"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="handleChange"
      />
    </span>
    <span class="v-checkbox__label">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCheckbox } from './useCheckbox'

export default defineComponent({
  name: 'VCheckbox',
  props: {
    name: [String],
    indeterminate: Boolean,
    checked: Boolean,
    disabled: Boolean,
    label: [String, Boolean, Number],
    modelValue: [String, Boolean, Number]
  },
  emits: ['update:modelValue', 'change'], // 避免外部给组件绑定事件的时候，绑定在根元素上，由内部主动emit来派发事件
  setup(props: any, ctx) {
    return useCheckbox(props)
  }
})
</script>
