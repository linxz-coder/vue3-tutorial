<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Category title="热门游戏列表">
                <ul>
                    <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                </ul>
            </Category>
            <Category title="今日美食城市">
                <img :src="imgUrl" alt="美食城市">
            </Category>
            <Category title="今日影视推荐">
                <video :src="videoUrl" alt="视频推荐" controls></video>
            </Category>
        </div>

    </div>
</template>

<script setup lang="ts" name="Father">
import Category from './Category.vue'
import { ref, reactive } from 'vue'

let games = reactive([
    { id: 'fefefe1', name: '王者荣耀' },
    { id: 'fefefe2', name: '英雄联盟' },
    { id: 'fefefe3', name: '绝地求生' },
    { id: 'fefefe4', name: '和平精英' }
])

let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let videoUrl = ref('https://www.runoob.com/try/demo_source/movie.mp4')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}

.content {
    display: flex;
    justify-content: space-evenly;
}

img,
video {
    width: 100%;
}
</style>