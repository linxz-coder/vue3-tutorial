<template>
    <div class="count">
        <h2>当前计数：{{ sum }}, 放大10倍后：{{ bigSum }}</h2>
        <h3>欢迎来到：{{ school }}, 大写是: {{ upperSchool }}, 坐落于{{ address }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup name="Count">
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
// 引入useCountStore
import { useCountStore } from '@/store/count'
// 使用useCountStore，得到一个专门保存count相关的store
const countStore = useCountStore()
// storeToRefs只会关注store中的数据，不会对方法进行ref包裹
const { sum, school, address, bigSum, upperSchool } = storeToRefs(countStore)
console.log(storeToRefs(countStore))

// 数据
let n = ref(1)  //用户选择的数字

// 方法
function add() {
    // 第一种修改方式
    // countStore.sum += n.value

    // 第二种修改方式
    /* countStore.$patch({
        sum: 888,
        school: '清华大学',
        address: '北京'
    }) */

    // countStore.sum += n.value
    // countStore.school = '清华大学'
    // countStore.address = '北京'

    // 第三种修改方式
    countStore.increment(n.value)


}

function minus() {
    countStore.sum -= n.value

}

</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

select,
button {
    margin: 0 5px;
    height: 25px;
}
</style>