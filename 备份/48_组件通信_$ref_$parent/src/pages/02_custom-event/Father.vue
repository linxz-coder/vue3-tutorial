<template>
    <div class="father">
        <h3>父组件</h3>
        <h4 v-show="toy">子传给父亲玩具：{{ toy }}</h4>
        <!-- 给子组件Child绑定事件 -->
        <Child @send-toy="saveToy" />
    </div>
</template>

<script setup lang="ts" name="Father">
import Child from './Child.vue'
import { ref } from 'vue'
// 数据
let toy = ref('')

function saveToy(value: string) {
    toy.value = value
}

</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>