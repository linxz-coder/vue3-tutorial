<template>
  <div class="person">
    <h2>当前水温：{{ temp }} °C</h2>
    <h2>当前水位：{{ height }} cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from 'vue'
// 数据
let temp = ref(10)
let height = ref(0)

// 方法
function changeTemp() {
  temp.value += 10
}

function changeHeight() {
  height.value += 10
}

// 监视
/* watch([temp, height], ([newTemp, newHeight]) => {
  if (newTemp >= 60 || newHeight >= 80) {
    console.log('水温或水位超标')
  }
}) */

watchEffect(() => {
  console.log('@')
  if (temp.value >= 60 || height.value >= 80) {
    console.log('水温或水位超标')
  }
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