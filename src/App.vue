<script setup lang="ts">
import D01Button from './demos/d01-button.vue'
import D02Input from './demos/d02-input.vue'
import D03Todo from './demos/d03-todo.vue'
import Link from './demos/components/link.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-between mb-8 gap-2">
    <div class="flex flex-row love-in-the-air">
      <img src="./public/images/react-logo.svg" width="60" height="60" alt="React.js logo" class="-rotate-6">
      <img src="./public/images/vue-logo.svg" width="60" height="60" alt="Vue.js logo" class="rotate-6">

      <span class="heart heart-1">❤️</span>
      <span class="heart heart-2">❤️</span>
      <span class="heart heart-3">❤️</span>
      <span class="heart heart-4">❤️</span>
      <span class="heart heart-5">❤️</span>
    </div>

    <h1 class="font-black text-gray-900 text-[2rem] md:text-[3rem] dark:text-gray-200">
      React in Vue
    </h1>
  </div>

  <p class="dark:text-gray-300">
    Ever had to play matchmaker with your app? Yep, we're talking about making React.js components cozy in their new Vue.js home. It's like giving your app a makeover, but for code! 💖✨
  </p>

  <p class="mt-2 dark:text-gray-300">
    Explore the <Link href="https://github.com/h2xd/react-in-vue" text="react-in-vue repository" /> wonderland, where the magic of React meets the charm of Vue.
  </p>

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
    transform: scale(1) translate(0, -30px);
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
  animation-duration: 4.5s;
  animation-delay: 5s;
  left: calc(50% - 40px);
}

.heart-2 {
  animation-duration: 5s;
  animation-delay: 1.5s;
  left: calc(50% + 20px);
}

.heart-3 {
  animation-duration: 3.7s;
  animation-delay: 2s;
  left: calc(50% + 30px);
}

.heart-4 {
  animation-duration: 2.1s;
  animation-delay: 4s;
  left: calc(50% - 20px);
}

.heart-5 {
  animation-duration: 4s;
  animation-delay: 3s;
}
</style>
