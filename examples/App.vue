<template>
  <v-button @click="handleClick">按钮</v-button>
  <v-button type="success">按钮</v-button>
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

  <v-row :gutter="20">
    <v-col :span="8" style="background: red">1</v-col>
    <v-col :span="8" style="background: blue">2</v-col>
    <v-col :span="8" style="background: pink">3</v-col>
  </v-row>

  <v-row justify="center">
    <v-col :span="2" style="background: red">1</v-col>
    <v-col :span="2" style="background: blue">2</v-col>
    <v-col :span="2" style="background: pink">3</v-col>
  </v-row>
</template>

<script>
import { defineComponent } from 'vue'

const useButton = () => {
  const handleClick = (e) => {
    console.log('click')
  }
  return {
    handleClick
  }
}

export default defineComponent({
  setup() {
    return {
      ...useButton()
    }
  }
})
</script>
