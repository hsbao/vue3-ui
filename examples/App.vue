<template>
  <v-button @click="handleClick">按钮</v-button>
  <v-button type="success" @click="openMessage">open message by vue2</v-button>
  <v-button type="success" @click="openMessageByVue3"
    >open message by vue3</v-button
  >
  <div style="width: 100%; height: 10px"></div>
  <v-button-group>
    <v-button type="danger">按钮1</v-button>
    <v-button type="warning">按钮2</v-button>
  </v-button-group>
  <v-icon name="xiazai"></v-icon>

  <hr />
  <v-row tag="div">
    <v-col :span="6" style="background: red">1</v-col>
    <v-col :span="6" :offset="6" style="background: blue">2</v-col>
    <v-col :span="6" style="background: pink">3</v-col>
  </v-row>
  <div style="width: 100%; height: 10px"></div>
  <v-row :gutter="20">
    <v-col :span="8" style="background: red">1</v-col>
    <v-col :span="8" style="background: blue">2</v-col>
    <v-col :span="8" style="background: pink">3</v-col>
  </v-row>
  <div style="width: 100%; height: 10px"></div>
  <v-row justify="center">
    <v-col :span="2" style="background: red">1</v-col>
    <v-col :span="2" style="background: blue">2</v-col>
    <v-col :span="2" style="background: pink">3</v-col>
  </v-row>

  <hr />

  <v-checkbox v-model="checkVal" @change="handleChange">checkbox1</v-checkbox>
  <v-checkbox v-model="checkVal" disabled>checkbox2</v-checkbox>
  <v-checkbox v-model="checkVal" indeterminate>checkbox3</v-checkbox>

  <div>{{ checkboxGroupVal }}</div>
  <v-checkbox-group v-model="checkboxGroupVal" @change="checkboxGroupChange">
    <v-checkbox v-for="c in checkList" :key="c" :label="c"></v-checkbox>
  </v-checkbox-group>

  <hr />
  <v-transfer
    v-model="rightValue"
    :data="transferData"
    :props="transferProps"
  ></v-transfer>
</template>

<script>
import { defineComponent } from 'vue'

import { useButton } from './hooks/useButton'
import { useCheckbox } from './hooks/useCheckbox'
import { useCheckboxGroup } from './hooks/useCheckboxGroup'
import { useTransfer } from './hooks/useTransfer'

export default defineComponent({
  setup() {
    return {
      ...useButton(),
      ...useCheckbox(),
      ...useCheckboxGroup(),
      ...useTransfer()
    }
  },
  methods: {
    openMessage() {
      this.$message('4567')
    }
  }
})
</script>
