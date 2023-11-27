<script setup lang="ts">
import { ref } from 'vue'
import Input from '../components/Input'
import Button from '../components/Button'
import Demo from './components/demo.vue'
import Token from './components/token.vue'

const inputModelValue = ref('test')
</script>

<template>
  <Demo>
    <template #title>
      <Token href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input" text="Input" />
      element with
      <Token href="https://vuejs.org/guide/components/v-model.html" text="v-model" />
      handling
    </template>

    <template #description>
      The most common case is input fields and other types of form field.
      Here you see a <Token href="https://vuejs.org/" text="Vue" /> controlled example where data is bi-directional using <Token href="https://vuejs.org/guide/components/v-model.html" text="v-model" />.
      <br>
      Write something into the field ✍️
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
