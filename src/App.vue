<template>
    <p>Hello World</p>
    <Input />
    <HmqButton :text="text" type="button" @click="clickHandler" />
</template>

<script setup lang="ts">
import Input from "./vue-components/Input.vue";
import HmqButton from "./vue-components/Button"
import {ref} from "vue";

function clickHandler() {
  console.log('button clicked')
}

const text = ref('test')


window.setInterval(() => {
  text.value = 'text ' + Date.now().toString()
}, 1000)
</script>
