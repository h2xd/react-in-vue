<script setup lang="ts">
import { ref } from 'vue'
import InputWithButton from './vue-components/InputWithButton.vue'
import HmqButton from './vue-components/Button'
import Input from './vue-components/Input'

function clickHandler() {
  console.log('button clicked')
}

const text = ref('test')
const inputModelValue = ref('')

window.setInterval(() => {
  text.value = `text ${Date.now().toString()}`
}, 1000)
</script>

<template>
  <h1 class="text-xl font-black mb-6">
    React in Vue Demo
  </h1>

  <InputWithButton />
  <HmqButton :text="text" type="button" @click="clickHandler" />

  <hr>

  <Input v-model="inputModelValue" />
  Input value: {{ inputModelValue }}
</template>
