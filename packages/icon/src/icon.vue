<template>
  <i :class="`v-ui-icons v-icon-${name}`"></i>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'VIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
})
</script>
