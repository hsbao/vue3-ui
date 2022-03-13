<template>
  <div class="v-transfer__panel">
    <div class="v-transfer-panel__header">
      <v-checkbox v-model="allChecked" @change="handleCheckedAllChange">
        全选
      </v-checkbox>
    </div>
    <div class="v-transfer-panel__body">
      <v-checkbox-group v-model="checked">
        <v-checkbox
          v-for="item in data"
          :key="item[keyProp]"
          :label="item[keyProp]"
          :disabled="item[disabledProp]"
        >
          {{ item[labelProp] }}
        </v-checkbox>
      </v-checkbox-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
import { Props } from './transfer.types'
import { useCheck } from './useCheck'

import VCheckbox from '@vui/checkbox'
import VCheckboxGroup from '@vui/checkbox-group'

export default defineComponent({
  name: 'VTransferPanel',
  components: {
    VCheckbox,
    VCheckboxGroup
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    props: {
      type: Object as PropType<Props>
    }
  },
  emits: ['checked-change'],
  setup(props) {
    const panelState = reactive({
      checked: [], // 选中的值
      allChecked: false // 是否全选
    })

    // 根据props计算出对应的key disabled和label
    const { keyProp, labelProp, disabledProp, handleCheckedAllChange } =
      useCheck(props, panelState)

    return {
      keyProp,
      labelProp,
      disabledProp,
      handleCheckedAllChange,
      ...toRefs(panelState)
    }
  }
})
</script>
