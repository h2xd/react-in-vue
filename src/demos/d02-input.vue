<script setup lang="ts">
import { ref } from 'vue'
import Input from '../react-components/ReactInput'
import Demo from './components/demo.vue'

const inputModelValue = ref('test')
</script>

<template>
  <Demo>
    <template #title>
      Input element with v-model handling
    </template>

    <Input v-model="inputModelValue" />
    Input value: {{ inputModelValue }}
  </Demo>
</template>
