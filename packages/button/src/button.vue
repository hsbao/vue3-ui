<template>
  <button :class="classs" @click="handleClick">
    <i v-if="loding" class="v-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

type IButton = 'primary' | 'warning' | 'danger' | 'default' | 'success' | 'info'

export default defineComponent({
  name: 'VButton',
  props: {
    type: {
      type: String as PropType<IButton>,
      default: 'primary',
      vaildator(val: string) {
        return [
          'primary',
          'warning',
          'danger',
          'default',
          'success',
          'info'
        ].includes(val)
      }
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean
  },
  emits: ['click'], // 避免外部使用组件的时候，在组件上@click，会和组件内部的@click重复
  setup(props: any, ctx): any {
    const classs = computed(() => [
      'v-button',
      `v-button--${props.type}`,
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-round': props.round
      }
    ])

    const handleClick = (e: any) => {
      ctx.emit('click', e)
    }

    return { classs, handleClick }
  }
})
</script>
