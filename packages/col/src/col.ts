import { defineComponent, h, computed, inject } from 'vue'
export default defineComponent({
  name: 'VCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      // 栅格占据的列数
      type: Number,
      default: 24
    },
    offset: {
      // 栅格左侧的间隔格数
      type: Number,
      default: 0
    }
  },
  setup(props: any, { slots }) {
    const gutter = inject('VRow', 0) // 取到provide的数据

    const res = []
    const pos = ['span', 'offset'] as const
    const classs = computed(() => {
      pos.forEach((item) => {
        const size = props[item]
        if (typeof size === 'number' && size > 0) {
          res.push(`v-col-${item}-${size}`)
        }
      })
      return ['v-col', ...res]
    })

    const styles = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
      return {}
    })

    return () =>
      h(
        props.tag,
        { class: classs.value, style: styles.value },
        slots.default?.()
      )
  }
})
