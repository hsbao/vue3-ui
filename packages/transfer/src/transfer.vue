<template>
  <div class="v-transfer">
    <v-transfer-panel
      :data="sourceData"
      :props="props"
      @checked-change="onSourceCheckedChange"
    ></v-transfer-panel>
    <div class="v-transfer__buttons">
      <v-button :disabled="!rightChecked.length" @click="addToLeft">
        to left
      </v-button>
      <v-button :disabled="!leftChecked.length" @click="addToRight">
        to right
      </v-button>
    </div>
    <v-transfer-panel
      :data="targetData"
      :props="props"
      @checked-change="onTargetCheckedChange"
    ></v-transfer-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue'
import VTransferPanel from './transfer-panel.vue'
import VButton from '@vui/button'

import { DataItem, Props, Key } from './transfer.types'
import { useComputedData } from './useComputedData'

export default defineComponent({
  name: 'VTransfer',
  components: {
    VTransferPanel,
    VButton
  },
  props: {
    data: {
      type: Array as PropType<DataItem[]>
    },
    props: {
      type: Object as PropType<Props>,
      default: () => ({
        key: 'key',
        label: 'label',
        disabled: 'disabled'
      })
    },
    modelValue: {
      type: Array as PropType<Key[]>
    }
  },
  setup(props, { emit }) {
    // 1. 将数据分成两边，一边放左，一边放右
    let { propsKey, sourceData, targetData } = useComputedData(props)

    const checkState = reactive({
      leftChecked: [],
      rightChecked: []
    })

    const onSourceCheckedChange = (leftValue) => {
      checkState.leftChecked = leftValue
    }
    const onTargetCheckedChange = (rightValue) => {
      checkState.rightChecked = rightValue
    }

    const addToLeft = () => {
      const currentvalue = props.modelValue.slice(0)
      if (checkState.rightChecked.length) {
        checkState.rightChecked.forEach((item) => {
          let index = currentvalue.indexOf(item)
          if (index > -1) {
            currentvalue.splice(index, 1)
          }
        })
        emit('update:modelValue', currentvalue)
      }
    }
    const addToRight = () => {
      console.log('right')
    }

    return {
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,
      ...toRefs(checkState)
    }
  }
})
</script>
