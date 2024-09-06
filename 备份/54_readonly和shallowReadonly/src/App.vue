<template>
    <div class="app">
        <h2>sum1求和为：{{ sum1 }}</h2>
        <h2>sum2求和为：{{ sum2 }}</h2>
        <h2>当前汽车为：{{ car1 }}</h2>
        <button @click="changeSum1">点我sum1+1</button>
        <button @click="changeSum2">点我sum2+1</button>
        <button @click="changeBrand1">修改品牌（car1）</button>
        <button @click="changeColor1">修改颜色（car1）</button>
        <button @click="changePrice1">修改价格（car1）</button>
        <br>
        <h2>当前汽车为：{{ car1 }}</h2>
        <button @click="changeBrand2">修改品牌（car2）</button>
        <button @click="changeColor2">修改颜色（car2）</button>
        <button @click="changePrice2">修改价格（car2）</button>

    </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, readonly, shallowReadonly } from 'vue'
let sum1 = ref(0)
let sum2 = readonly(sum1)
let car1 = reactive({
    brand: '奔驰',
    options: {
        color: 'red',
        price: 100
    }
})

let car2 = shallowReadonly(car1)

function changeSum1() {
    sum1.value++
}

function changeSum2() {
    sum2.value++
}

function changeBrand1() {
    car1.brand = '宝马'
}

function changeColor1() {
    car1.options.color = 'blue'
}

function changePrice1() {
    car1.options.price += 10
}

function changeBrand2() {
    car2.brand = '奥迪'
}

function changeColor2() {
    car2.options.color = 'yellow'
}

function changePrice2() {
    car2.options.price += 20
}

</script>

<style scoped>
.app {
    background-color: #ddd;
    border-radius: 10px;
    /* 圆角 */
    box-shadow: 0 0 10px;
    /* 阴影 */
    padding: 10px;
}

button {
    margin: 0 5px;
}
</style>