<script setup lang="ts">
import Token from './token.vue'
</script>

<template>
  <h2 class="font-bold text-gray-900 mb-2 text-xl mt-12">
    <slot name="title" />
  </h2>

  <p class="text-gray-800 italic mb-4">
    <slot name="description" />
  </p>

  <div class="border-2 rounded border-gray-300 p-4 mb-8 flex flex-col gap-2">
    <slot name="default" />

    <div class="bg-gray-50 rounded text-xs mt-4">
      <div class="border-b p-2 flex flex-row items-center justify-between">
        <span>
          <Token href="https://vuejs.org/api/reactivity-core.html#ref" text="ref" />
          value within
          <a href="https://vuejs.org/" target="_blank" class="hover:underline hover:text-blue-600">
            <img src="../../public/images/vue-logo.svg" width="16" height="16" alt="Vue.js logo" class="inline-block">
            Vue.js
          </a>
        </span>

        <slot name="refExtra" />
      </div>

      <pre class="p-2"><code><slot name="code" /></code></pre>
    </div>
  </div>
</template>
