<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <button @click="showNewsDetail(news)">查看新闻</button>
                <RouterLink :to="{
                    name: 'xiangxi',
                    query: { id: news.id, title: news.title, content: news.content }
                }">
                    {{ news.title }}
                </RouterLink>

            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterView, RouterLink, useRouter } from 'vue-router';

const newsList = reactive([
    { id: 'adfefe01', title: '一种抗癌食物', content: '西蓝花' },
    { id: 'adfefe02', title: '如何一夜暴富', content: '学IT' },
    { id: 'adfefe03', title: '震惊，万万没想到...', content: '明天是周一' },
    { id: 'adfefe04', title: '好消息！', content: '快过年了。' }
])

const router = useRouter();

interface NewsInter {
    id: string;
    title: string;
    content: string;
}

function showNewsDetail(news: NewsInter) {
    router.push({
        name: 'xiangxi',
        query: { id: news.id, title: news.title, content: news.content }
    });
}


</script>

<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

.news li {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>