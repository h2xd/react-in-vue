<script setup lang="ts">
</script>

<template>
  <h2 class="font-bold mb-1 text-xl">
    <slot name="title" />
  </h2>

  <p class="text-gray-800 italic mb-3">
    <slot name="description" />
  </p>

  <div class="border-2 rounded border-gray-300 p-4 mb-8 flex flex-col gap-2">
    <slot name="default" />
  </div>
</template>
