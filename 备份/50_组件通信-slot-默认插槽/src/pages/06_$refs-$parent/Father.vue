<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>房产：{{ house }}</h4>
        <button @click="changeToy">修改Child1的玩具</button>
        <button @click="changeComputer">修改Child2的电脑</button>
        <button @click="getAllChild($refs)">让所有孩子的书变多</button>
        <Child1 ref="c1" />
        <Child2 ref="c2" />
    </div>
</template>

<script setup lang="ts" name="Father">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'

import { ref, reactive } from 'vue'

// 数据
let house = ref('4')
let c1 = ref()
let c2 = ref()

let obj = reactive({
    a: 1,
    b: 2,
    c: ref(3)
})
let x = ref(4)

console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log(x.value)

// 方法
function changeToy() {
    console.log(c1.value)
    c1.value.toy = '小黄人'
}

function changeComputer() {
    console.log(c2.value)
    c2.value.computer = '戴尔'
}

function getAllChild(refs: { [key: string]: any }) {
    // console.log(refs)
    for (let key in refs) {
        // console.log(refs[key])
        refs[key].book += 3
    }
}

// 暴露数据
defineExpose({ house })
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>