<script lang="ts" setup>
interface Props {
  href: string
  text: string
  className?: string
}

defineProps<Props>()
</script>

<template>
  <a :href="href" target="_blank" :class="`text-blue-700 hover:underline ${className}`">
    {{ text }}
  </a>
</template>
