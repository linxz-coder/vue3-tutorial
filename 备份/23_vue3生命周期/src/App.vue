<template>
    <Person v-if="isShow" />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref, onMounted } from 'vue'

// 挂载后
onMounted(() => {
    console.log('父————挂载后')
})

const isShow = ref(true)

</script>