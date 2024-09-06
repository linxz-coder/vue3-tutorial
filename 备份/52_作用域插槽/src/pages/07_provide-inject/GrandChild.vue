<template>
    <div class="grand-child">
        <h3>孙组件</h3>
        <h4>钱：{{ money }}万元</h4>
        <h4>车：一辆{{ car.brand }}车，价格{{ car.price }}万</h4>
        <button @click="updateMoney(6)">花爷爷的钱</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import { inject } from 'vue';

// 植入数据
let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (x: number) => { } });
const car = inject('che', { brand: '默认品牌', price: 0 });
</script>

<style scoped>
.grand-child {
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>