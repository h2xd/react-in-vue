<script lang="ts" setup>
interface Props {
  href: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <a href="https://vuejs.org/api/reactivity-core.html#ref" target="_blank" class="text-blue-700 hover:underline">
    {{ text }}
  </a>
</template>
