<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from '../components/Todo'
import Todo from '../components/Todo'
import Button from '../components/Button'
import Demo from './components/demo.vue'
import Token from './components/token.vue'

const initialTodoItems: TodoItem[] = [{
  key: Date.now().toString(),
  title: 'First todo',
}]

const todoItems = ref<TodoItem[]>(initialTodoItems)
</script>

<template>
  <Demo>
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

    <template #refExtra>
      <Button text="reset" @click="todoItems = initialTodoItems" />
    </template>

    <template #code>
      {{ JSON.stringify(todoItems, null, 2) }}
    </template>
  </Demo>
</template>
