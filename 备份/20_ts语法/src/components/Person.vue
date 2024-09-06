<template>
  <div class="person">
    ???
  </div>
</template>

<script lang="ts" setup>
import { type PersonInter, type Persons } from '@/types' //@从src目录开始找

// let person: PersonInter = { id: '1234jfe32j', name: '张三', age: 18 }

let personList: Persons = [
  { id: '1234jfe32j', name: '张三', age: 18 },
  { id: '1234jfe32j', name: '李四', age: 20 },
  { id: '1234jfe32j', name: '王五', age: 22 }
]

</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
  /* 上下0 左右5px */
}

li {
  font-size: 20px;
}
</style>