<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from '../components/Todo'
import Todo from '../components/Todo'
import Button from '../components/Button'
import Demo from './components/demo.vue'

const initialTodoItems = [{
  key: Date.now(),
  title: 'First todo',
}]

const todoItems = ref<TodoItem[]>(initialTodoItems)
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

    <template #refExtra>
      <Button text="reset" @click="todoItems = initialTodoItems" />
    </template>

    <template #code>
      {{ JSON.stringify(todoItems, null, 2) }}
    </template>
  </Demo>
</template>
