<script setup lang="ts">
import Button from '../../components/Button'
import Token from './token.vue'
import Link from './link.vue'

interface Props {
  href: string
}

defineProps<Props>()

defineEmits(['reset'])
</script>

<template>
  <h2 class="font-bold text-gray-900 mb-2 text-xl mt-16 dark:text-gray-200">
    <slot name="title" />
  </h2>

  <p class="text-gray-800 dark:text-gray-300 italic mb-4">
    <slot name="description" />
  </p>

  <div class="font-mono flex flex-row items-center text-xs mb-2 mt-4">
    <img src="../../public/images/react-logo.svg" width="16" height="16" alt="React.js logo" class="inline-block mr-1">Component written in React.js
  </div>
  <div class="border-2 rounded border-gray-300 mb-2 dark:border-gray-800">
    <div class="p-4 flex flex-col gap-4">
      <slot name="default" />
    </div>
  </div>

  <div class="text-xs mt-4">
    <div class="flex flex-row items-center justify-between dark:border-gray-800 mb-2">
      <span>
        <Token href="https://vuejs.org/api/reactivity-core.html#ref" text="ref" />
        value within
        <a href="https://vuejs.org/" target="_blank" class="hover:underline hover:text-blue-600">
          <img src="../../public/images/vue-logo.svg" width="16" height="16" alt="Vue.js logo" class="inline-block">
          Vue.js
        </a>
      </span>

      <Button text="reset" variant="secondary" @click="$emit('reset')" />
    </div>

    <pre class="p-4 border-2 rounded border-gray-300 mb-2 dark:border-gray-800"><code><slot name="code" /></code></pre>
  </div>
  <Link :href="href" text="View implementation of this demo" class-name="text-sm" />
</template>
