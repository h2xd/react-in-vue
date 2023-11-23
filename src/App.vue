<template>
    <p>Hello World</p>
    <InputWithButton />
    <HmqButton :text="text" type="button" @click="clickHandler" />

    <hr />

    <Input v-model="inputModelValue" />
    Input value: {{ inputModelValue }}
</template>

<script setup lang="ts">
import InputWithButton from "./vue-components/InputWithButton.vue";
import HmqButton from "./vue-components/Button"
import Input from "./vue-components/Input"

import {ref} from "vue";

function clickHandler() {
  console.log('button clicked')
}

const text = ref('test')
const inputModelValue = ref('')


window.setInterval(() => {
  text.value = 'text ' + Date.now().toString()
}, 1000)
</script>
