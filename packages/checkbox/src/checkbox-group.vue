<template>
  <div class="v-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'

export default defineComponent({
  name: 'VCheckboxGroup',
  props: {
    modelValue: {
      type: Array
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const modelValue = computed(() => props.modelValue)
    const changeEvent = (val) => {
      emit('change', val) // 触发change
      emit('update:modelValue', val) // 数据双向绑定，更新v-model的值
    }

    // 把数据传给子组件
    provide('VCheckboxGroup', {
      name: 'VCheckboxGroup',
      modelValue,
      changeEvent
    })
  }
})
</script>
