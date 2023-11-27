<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from '../components/Todo'
import Todo from '../components/Todo'
import Demo from './components/demo.vue'
import Token from './components/token.vue'

const initialTodoItems: TodoItem[] = [{
  key: Date.now().toString(),
  title: 'First todo',
}]

const todoItems = ref<TodoItem[]>(initialTodoItems)
</script>

<template>
  <Demo href="https://github.com/h2xd/react-in-vue/blob/main/src/demos/d03-todo.vue" @reset="todoItems = initialTodoItems">
    <template #title>
      Stateful <Token href="https://react.dev/" text="React" /> module
    </template>

    <template #description>
      Let's take it to another level by having a reactive element in <Token href="https://vuejs.org/" text="Vue" />.
      Pass it to <Token href="https://react.dev/" text="React" /> and back through a two way data binding.
      <br>
      What time is it? Todo App o'clock ⏰
    </template>

    <Todo v-model="todoItems" />

    <template #code>
      {{ JSON.stringify(todoItems, null, 2) }}
    </template>
  </Demo>
</template>
