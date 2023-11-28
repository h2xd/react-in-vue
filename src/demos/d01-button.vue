<script lang="ts" setup>
import { computed, ref } from 'vue'
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

const wasClicked = computed(() => time.value > nowWhenMounted,
)
</script>

<template>
  <Demo href="https://github.com/h2xd/react-in-vue/blob/main/src/demos/d01-button.vue" @reset="reset">
    <template #title>
      <Token href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button" text="<button>" /> with <Token href="https://vuejs.org/guide/essentials/event-handling.html" text="@click" /> handler
    </template>

    <template #description>
      In the grand theater of code, we've got a classic handling performance for you!
      Passing the React component a <Token href="https://react.dev/learn/passing-props-to-a-component" text="prop" />
      and setting the stage for the <Token href="https://vuejs.org/guide/essentials/event-handling.html" text="@click" /> event blockbuster.
      <br>
      Click that button and witness the code drama unfold! 🎭
    </template>

    <Button :text="wasClicked ? `clicked after mounted (${clickedTimes}x)` : 'click me'" @click="updateTime" />

    <template #code>
      {{ wasClicked ? 'Last clicked at' : 'Mounted at' }}: {{ time }}
    </template>
  </Demo>
</template>
