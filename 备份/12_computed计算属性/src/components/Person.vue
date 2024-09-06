<template>
  <div class="person">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <button @click="changeFullName">将全名改成li-si</button>
    全名：<span>{{ fullName }}</span>
  </div>
</template>

<script lang="ts" setup>

import { ref, computed } from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')

//计算属性是只读的，无法改变fullName的值
// let fullName = computed(() => {
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value //首字母大写
// })

//这样子计算属性可读可写的
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + ' ' + lastName.value //首字母大写
  },
  set(val) {
    console.log('set', val)
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  }
}
)


function changeFullName() {
  console.log(fullName.value)
  fullName.value = 'li-si'
}
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