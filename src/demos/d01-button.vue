<script lang="ts" setup>
import { ref } from 'vue'
import Button from '../components/Button'
import Demo from './components/demo.vue'
import Token from './components/token.vue'

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
      <Token href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" text="button" /> with <Token href="https://vuejs.org/guide/essentials/event-handling.html" text="@click" /> handler
    </template>

    <template #description>
      Classic handling were you can assign a handler to an element.
      In this example we are passing a
      <Token href="https://react.dev/learn/passing-props-to-a-component" text="prop" /> and
      <Token href="https://vuejs.org/guide/essentials/event-handling.html" text="@click" /> event handler to <Token href="https://react.dev/" text="React" />.
      Click the button 👇
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
