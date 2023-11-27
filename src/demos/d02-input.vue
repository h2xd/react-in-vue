<script setup lang="ts">
import { ref } from 'vue'
import Input from '../components/Input'
import Button from '../components/Button'
import Demo from './components/demo.vue'

const inputModelValue = ref('test')
</script>

<template>
  <Demo>
    <template #title>
      Input element with v-model handling
    </template>

    <Input v-model="inputModelValue" />

    <template #refExtra>
      <Button text="reset" @click="inputModelValue = 'test'" />
    </template>

    <template #code>
      {{ inputModelValue }}
    </template>
  </Demo>
</template>
