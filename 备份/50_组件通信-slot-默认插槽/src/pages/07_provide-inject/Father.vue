<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>钱：{{ money }}万元</h4>
        <h4>车：一辆{{ car.brand }}车，价格{{ car.price }}万</h4>
        <Child />
    </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref, reactive, provide } from 'vue'

// 数据
let money = ref(100)
let car = reactive({
    brand: '奔驰',
    price: 100,
})

// 方法
function updateMoney(value: number) {
    money.value -= value
}

// 向后代提供数据，前面是数据的名字，后面是数据的值
provide('moneyContext', { money, updateMoney })
provide('che', car)
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>