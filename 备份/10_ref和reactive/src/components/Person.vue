<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车品牌</button>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCar">修改汽车</button>
  </div>
  <hr>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="changeSum">sum+1</button>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

// 数据
let car = ref({ brand: 'benz', price: 100 })
let sum = ref(0)

// 方法
function changeCar() {
  // car = { brand: 'byd', price: 200 }
  // Object.assign(car, { brand: 'byd', price: 200 }) //顶掉属性，不是整个对象，因为原对象被reactive包装了
  car.value = { brand: 'byd', price: 200 }
}

function changeBrand() {
  car.value.brand = 'bmw'
}

function changePrice() {
  car.value.price += 10
}

function changeSum() {
  sum.value += 1
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