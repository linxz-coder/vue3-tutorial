<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

// 数据
let car = ref({ brand: 'benz', price: 100 })
let games = ref([
  { id: 1, name: '王者荣耀' },
  { id: 2, name: '英雄联盟' },
  { id: 3, name: '绝地求生' }
])

// 方法
function changePrice() {
  car.value.price += 10
  console.log(car.value.price)
}

function changeFirstGame() {
  games.value[0].name = '神秘海域'
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