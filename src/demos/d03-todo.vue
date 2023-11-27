<script setup lang="ts">
import { ref } from 'vue'
import type { TodoItem } from '../components/Todo'
import Todo from '../components/Todo'
import Demo from './components/demo.vue'

const todoItems = ref<TodoItem[]>([
  {
    key: Date.now(),
    title: 'First todo',
  },
])
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

    <div class="bg-gray-50 rounded text-xs mt-4">
      <div class="border-b p-2">
        <code class="px-2 py-0.5 bg-gray-200 rounded">ref</code> data values within Vue
      </div>

      <pre class="p-2"><code>{{ JSON.stringify(todoItems, null, 2) }}</code></pre>
    </div>
  </Demo>
</template>
