<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }} 、 {{ person.car.c2 }}</h2>
    <button @click="changeName">改变姓名</button>
    <button @click="changeAge">改变年龄</button>
    <button @click="changeFirstCar">改变第一台汽车</button>
    <button @click="changeSecondCar">改变第二台汽车</button>
    <button @click="changeCar">改变整个车</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue'

// 数据
let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马'
  },
})

// 方法
function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changeFirstCar() {
  person.car.c1 = '奥迪'
}

function changeSecondCar() {
  person.car.c2 = '大众'
}

function changeCar() {
  person.car = {
    c1: '理想',
    c2: '蔚来'
  }
}

//监视
// 修改成getter函数。因为监视只能ref,reactive,getter函数,以及以上组成的数组和对象
// watch(() => person.name, (newVal, oldVal) => {
//   console.log('person.name变化了', newVal, oldVal)
// })

// 写成函数式，监视整个car对象，deep:true表示深度监视每个属性
watch(() => person.car, (newVal, oldVal) => {
  console.log('person.car变化了', newVal, oldVal)
}, { deep: true })


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