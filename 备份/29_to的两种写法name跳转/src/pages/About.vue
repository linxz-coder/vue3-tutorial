<template>
    <div class="about">
        <h2>大家好，欢迎来到凡学子的直播间</h2>
    </div>
</template>

<script setup lang="ts" name="About">
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
    console.log('About组件挂载')
})

onUnmounted(() => {
    console.log('About组件卸载')
})

</script>

<style scoped>
.about {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: rgb(85, 84, 84);
    font-size: 18px;
}
</style>
