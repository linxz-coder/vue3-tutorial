<template>
    <div class="app">
        <Header />
        <!-- 导航区 -->
        <div class="navigate">
            <RouterLink to="/home" active-class="active">首页</RouterLink>
            <RouterLink :to="{ name: 'xinwen' }" active-class="active">新闻</RouterLink>
            <!-- replace模式是相对于push模式的，不会重新加在栈上，而是直接替换，效果是不能后退上一页 -->
            <RouterLink replace :to="{ path: '/about' }" active-class="active">关于</RouterLink>
        </div>

        <!-- 展示区 -->
        <div class="main-content">
            <RouterView>

            </RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue'

</script>

<style scoped>
.navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a {
    color: white;
    display: block;
    text-align: center;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
}

.navigate a.active {
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
}

.main-content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}
</style>