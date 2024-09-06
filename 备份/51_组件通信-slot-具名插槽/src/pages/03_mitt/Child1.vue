<template>
    <div class="child1">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <button @click="emitter.emit('send-toy', toy)">玩具给弟弟玩</button>
    </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
import emitter from '@/utils/emitter';

// 数据
let toy = ref('奥特曼')

</script>

<style scoped>
.child1 {
    margin-top: 50px;
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>