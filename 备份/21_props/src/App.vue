<template>
    <Person a="哈哈" :list="personList" />
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue'
import { type Persons } from '@/types'

let personList = reactive<Persons>([
    { id: 'asfefe3', name: '张三', age: 18 },
    { id: 'asfe65', name: '李四', age: 20 },
    { id: 'asfedfe', name: '王五', age: 22 },
])
</script>