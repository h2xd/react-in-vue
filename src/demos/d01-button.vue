<script lang="ts" setup>
import { ref } from 'vue'
import VueButton from '../vue-components/VueButton'
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

    <VueButton text="hello" @click="updateTime" />

    <div>Last Update: {{ time }}</div>
  </Demo>
</template>
