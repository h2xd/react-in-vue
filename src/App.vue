<template>
    <p>Hello World</p>
    <Input />
    <HmqButton text="Anton" type="button" @click="clickHandler" />
</template>

<script setup lang="ts">
import Input from "./vue-components/Input.vue";
import HmqButton from "./vue-components/Button"

function clickHandler() {
  console.log('button clicked')
}
</script>
