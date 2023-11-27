<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../react-components/ReactButton'
import Demo from './components/demo.vue'

const time = ref(Date.now())

function updateTime() {
  time.value = Date.now()
}
</script>

<template>
  <Demo>
    <template #title>
      Button with @click handler within Vue
    </template>

    <Button text="hello" @click="updateTime" />

    <div>Last Update: {{ time }}</div>
  </Demo>
</template>
