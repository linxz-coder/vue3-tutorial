<template>
    <h2>你好</h2>
    <button @click="showLog">点我输出Person这个元素</button>
    <Person ref="title2" />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref } from 'vue'

const title2 = ref()

function showLog() {

    console.log(title2.value.a)
}
</script>