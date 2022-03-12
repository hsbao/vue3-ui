import { defineComponent, h, computed, provide } from 'vue'
export default defineComponent({
  name: 'VRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start' // start/end/center/space-around/space-between/spacing-evenly
    }
  },
  setup(props: any, { slots }) {
    provide('VRow', props.gutter) // 跟vue2的provide一样

    const classs = computed(() => [
      'v-row',
      props.justify !== 'start' ? `is-justify-${props.justify}` : ''
    ])
    const styles = computed(() => {
      const res = {
        marginLeft: '',
        marginRight: ''
      }
      if (props.gutter !== 0) {
        res.marginLeft = res.marginRight = `-${props.gutter / 2}px`
      }
      return res
    })
    return () =>
      h(
        props.tag,
        { class: classs.value, style: styles.value },
        slots.default?.()
      )
  }
})
