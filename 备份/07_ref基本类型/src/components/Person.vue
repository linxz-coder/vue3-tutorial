<template>
  <div class="person">
    <h2>姓名： {{ name }}</h2>
    <h2>年龄： {{ age }}</h2>
    <h2>地址： {{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>

  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 数据
let name = ref('张三') //此时name不是响应式的，修改页面不会变化
let age = ref(18)
let tel = '123456789'
let address = "深圳市龙岗区龙岩二路339号"

console.log(1, name)
console.log(2, age)
console.log(3, tel)
console.log(4, address)


// 方法
function changeName() {
  name.value = 'zhangsan'
  console.log(name.value) // name确实改了，但name不是响应式的
}
function changeAge() {
  age.value += 1
  console.log(age.value)
}
function showTel() {
  alert(tel)
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
</style>