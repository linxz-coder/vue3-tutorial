<template>
    <div class="game">
        <h2>热门游戏</h2>
        <slot name="s1" :games="games" x="哈哈" y="你好"></slot>

    </div>
</template>

<script setup lang="ts" name="Game">
import { reactive } from 'vue'
let games = reactive([
    { id: 'fefefe1', name: '王者荣耀' },
    { id: 'fefefe2', name: '英雄联盟' },
    { id: 'fefefe3', name: '绝地求生' },
    { id: 'fefefe4', name: '和平精英' }
])

</script>

<style scoped>
.game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
}

h2 {
    text-align: center;
    background-color: orange;
    font-size: 20px;
    font-weight: 800;
}
</style>