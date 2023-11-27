<script lang="ts" setup>
interface Props {
  href: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank" class="hover:underline hover:text-blue-600 mr-0.5 font-mono">
    <code class="px-2 py-0.5 bg-gray-200 rounded">{{ text }}</code>
  </a>
</template>
