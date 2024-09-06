<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名： {{ person.name }}</h2>
    <h2>年龄： {{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'

// 数据
let person = reactive({
  name: '张三',
  age: 18
})

// 方法
function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

// reactive不能整体修改对象，只能修改对象的属性，用Object.assign可以绕开限制
function changePerson() {
  // person = {
  //   name: '李四',
  //   age: 90
  // }
  Object.assign(person, {
    name: '李四',
    age: 90
  })
}

// 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认开启深度监视，不能关闭深度监视
watch(person, (newValue, oldValue) => {
  console.log('person发生了变化', newValue, oldValue)
})



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