<script setup lang="ts">
import D01Button from './demos/d01-button.vue'
import D02Input from './demos/d02-input.vue'
import D03Todo from './demos/d03-todo.vue'
</script>

<template>
  <div class="flex flex-row items-center justify-between mb-8">
    <h1 class="font-black text-[3rem]">
      React in Vue Demo
    </h1>

    <div class="flex flex-row love-in-the-air">
      <img src="./public/images/vue-logo.svg" width="60" height="60" alt="Vue.js logo" class="-rotate-6">
      <img src="./public/images/react-logo.svg" width="60" height="60" alt="React.js logo" class="rotate-6">

      <span class="heart heart-1">❤️</span>
      <span class="heart heart-2">❤️</span>
      <span class="heart heart-3">❤️</span>
      <span class="heart heart-4">❤️</span>
      <span class="heart heart-5">❤️</span>
    </div>
  </div>

  <D01Button />
  <D02Input />
  <D03Todo />
</template>

<style scoped>
.love-in-the-air {
  position: relative;
}

@keyframes love {
  0% {
    opacity: 0;
    transform: scale(0) translate(0, 0);
  }

  15% {
    opacity: 1;
    transform: scale(1);
  }

  85% {
    opacity: 1;
    transform: scale(1) translate(0, -40px);
  }

  100% {
    opacity: 0;
    transform: scale(0) translate(0, -120px);
  }
}

.heart {
  position: absolute;
  z-index: 1;
  top: -25px;
  left: 50%;
  opacity: 0;
  font-size: 0.85rem;

  animation-name: love;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.heart-1 {
  animation-duration: 2.5s;
  animation-delay: 1s;
  left: calc(50% - 12px);
}

.heart-2 {
  animation-duration: 3s;
  animation-delay: 1.5s;
  left: calc(50% + 12px);
}

.heart-3 {
  animation-duration: 1.7s;
  animation-delay: 0.9s;
  left: calc(50% + 8px);
}

.heart-4 {
  animation-duration: 2.1s;
  animation-delay: 2s;
  left: calc(50% - 8px);
}

.heart-5 {
  animation-duration: 4s;
  animation-delay: 3s;
}
</style>
