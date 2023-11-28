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
      Time to level up the code game! <Token href="https://vuejs.org/" text="Vue" /> brings the reactive vibes, <Token href="https://react.dev/" text="React" /> gets a taste,
      and they do the tango with a <Token href="https://vuejs.org/guide/components/v-model.html" text="two-way data binding" />. It's Todo App o'clock – set your code alarms, and let the synchronization dance begin! 💃🕰️🕺
    </template>

    <Todo v-model="todoItems" />

    <template #code>
      {{ JSON.stringify(todoItems, null, 2) }}
    </template>
  </Demo>
</template>
