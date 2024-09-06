<template>
    <div class="app">
        <h2>求和为：{{ sum }}</h2>
        <h2>名字为：{{ person.name }}</h2>
        <h2>年龄为：{{ person.age }}</h2>
        <h2>汽车为：{{ car }}</h2>
        <button @click="changeSum">sum+1</button>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <span> | </span>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changeColor">修改颜色</button>
        <button @click="changeEngine">修改发动机</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script setup lang="ts" name="App">
import { ref, reactive, shallowRef, shallowReactive } from 'vue'

// 数据
let sum = shallowRef(0)
let person = shallowRef({
    name: '张三',
    age: 18
})

let car = shallowReactive({
    brand: '奔驰',
    options: {
        color: 'red',
        engine: 'V8'
    }
})

// 方法
function changeSum() {
    sum.value += 1
}

function changeName() {
    person.value.name = '李四'
}

function changeAge() {
    person.value.age = 20
}

function changePerson() {
    person.value = {
        name: '王五',
        age: 22
    }
}

function changeBrand() {
    car.brand = '宝马'
}

function changeColor() {
    car.options.color = 'blue'
}

function changeEngine() {
    car.options.engine = 'V12'
}

function changeCar() {
    Object.assign(car, {
        brand: '奥迪',
        options: {
            color: 'black',
            engine: 'V6'
        }
    })
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