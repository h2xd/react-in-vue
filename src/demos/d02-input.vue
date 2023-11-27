<script setup lang="ts">
import { ref } from 'vue'
import Input from '../components/Input'
import Button from '../components/Button'
import Demo from './components/demo.vue'

const inputModelValue = ref('test')
</script>

<template>
  <Demo>
    <template #title>
      Input element with v-model handling
    </template>

    <Input v-model="inputModelValue" />

    <div class="bg-gray-50 rounded text-xs mt-4">
      <div class="border-b p-2 flex flex-row items-center justify-between">
        <span><code class="px-2 py-0.5 bg-gray-200 rounded">ref</code> value within Vue</span>

        <span><Button text="reset" @click="inputModelValue = 'test'" /></span>
      </div>

      <pre class="p-2"><code>{{ inputModelValue }}</code></pre>
    </div>
  </Demo>
</template>
