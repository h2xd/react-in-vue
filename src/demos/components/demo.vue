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

    <div class="bg-gray-50 rounded text-xs mt-4">
      <div class="border-b p-2 flex flex-row items-center justify-between">
        <span><code class="px-2 py-0.5 bg-gray-200 rounded">ref</code> value within Vue</span>

        <slot name="refExtra" />
      </div>

      <pre class="p-2"><code><slot name="code" /></code></pre>
    </div>
  </div>
</template>
