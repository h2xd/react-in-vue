<script setup lang="ts">
import { ref } from 'vue'
import Todo from '../vue-components/VueTodo'
import Demo from './components/demo.vue'

const todoItems = ref([])
</script>

<template>
  <Demo>
    <template #title>
      Stateful React component
    </template>

    <template #description>
      Let's take it to another level by having a reactive element in Vue.
      Pass it to React and back through a two way data binding.

      What time is it? Todo App o'clock ⏰
    </template>

    <Todo v-model="todoItems" />

    Get through the Vue Model the items, if you want.

    <pre>
      <code>{{ JSON.stringify(todoItems, null, 2) }}</code>
    </pre>
  </Demo>
</template>
