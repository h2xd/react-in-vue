<script setup lang="ts">
import { ref } from 'vue'
import Todo from '../vue-components/VueTodo'
import Demo from './components/demo.vue'

const todoItems = ref([])
</script>

<template>
  <Demo>
    <template #title>
      Stateful React component. Classic Todo App
    </template>

    <Todo v-model="todoItems" />

    Get through the Vue Model the items, if you want.

    <pre>
      <code>{{ JSON.stringify(todoItems, null, 2) }}</code>
    </pre>
  </Demo>
</template>
