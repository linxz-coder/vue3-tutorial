<template>
  <div class="person">
    <h2>当前求和为：{{ sum }}, 放大10倍后：{{ bigSum }}</h2>
    <button @click="add">点我sum+1</button>
  </div>
  <hr>
  <img v-for="(dog, index) in dogList" :src="dog" :key="index">
  <br>
  <button @click="addDog">添加一只狗</button>
</template>

<script lang="ts" setup>
import useSum from '@/hooks/useSum'
import useDog from '@/hooks/useDog'

const { sum, add, bigSum } = useSum()
const { dogList, addDog } = useDog()
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

img {
  height: 100px;
  margin-right: 10px;
}
</style>