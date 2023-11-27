<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../components/Button'
import Demo from './components/demo.vue'

const nowWhenMounted = Date.now()

const time = ref(nowWhenMounted)
const clickedTimes = ref(0)

function updateTime() {
  time.value = Date.now()
  clickedTimes.value += 1
}

function reset() {
  time.value = nowWhenMounted
  clickedTimes.value = 0
}
</script>

<template>
  <Demo>
    <template #title>
      Button with @click handler within Vue
    </template>

    <Button :text="time > nowWhenMounted ? `clicked after mounted (${clickedTimes}x)` : 'click me'" @click="updateTime" />

    <template #refExtra>
      <Button text="reset" @click="reset" />
    </template>

    <template #code>
      {{ time }}
    </template>
  </Demo>
</template>
