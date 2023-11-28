<script setup lang="ts">
import { ref } from 'vue'
import Input from '../components/Input'
import Demo from './components/demo.vue'
import Token from './components/token.vue'

const inputModelValue = ref('test')
</script>

<template>
  <Demo href="https://github.com/h2xd/react-in-vue/blob/main/src/demos/d02-input.vue" @reset="inputModelValue = 'test'">
    <template #title>
      <Token href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" text="<input>" />
      element with
      <Token href="https://vuejs.org/guide/components/v-model.html" text="v-model" />
      handling
    </template>

    <template #description>
      Picture this: <Token href="https://vuejs.org/" text="Vue" /> is the maestro,
      conducting a bi-directional symphony of data using <Token href="https://vuejs.org/guide/components/v-model.html" text="v-model" />.
      It's like a conversation – you talk, <Token href="https://react.dev/" text="React" /> listens,
      tells it <Token href="https://vuejs.org/" text="Vue" />, and vice versa.
      <br>
      Go ahead, spill your thoughts into the field! ✨🎤
    </template>

    <Input v-model="inputModelValue" />

    <template #code>
      {{ inputModelValue }}
    </template>
  </Demo>
</template>
