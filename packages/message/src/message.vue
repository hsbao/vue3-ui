<template>
  <transition
    name="v-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destory')"
  >
    <div v-show="visible" :class="classs" :style="styles">massage</div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  computed,
  ref,
  onMounted,
  onUnmounted
} from 'vue'

import { IType } from './message.types'

export default defineComponent({
  name: 'VMessage',
  props: {
    id: { type: String, default: '' },
    message: { type: String, default: '' },
    type: { type: String as PropType<IType>, default: 'warning' },
    duration: { type: Number, default: 2000 },
    center: { type: Boolean, default: false },
    onClose: { type: Function as PropType<() => void> },
    offset: { type: Number, default: 20 }
  },
  setup(props) {
    const classs = computed(() => [
      'v-message',
      `v-message--${props.type}`,
      props.center ? 'is-center' : ''
    ])

    const visible = ref(false)
    let timer: any = null
    const startTimer = () => {
      timer = setTimeout(() => {
        visible.value = false
      }, props.duration)
    }
    onMounted(() => {
      startTimer()
      visible.value = true
    })
    onUnmounted(() => {
      clearTimeout(timer)
    })

    const styles = computed(() => ({
      top: `${props.offset}px`
    }))

    return {
      classs,
      visible,
      styles
    }
  }
})
</script>
