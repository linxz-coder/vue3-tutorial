<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>{{ username }}</h4>
        <h4>{{ password }}</h4>
        <!-- v-model用在html标签上 -->
        <!-- <input type="text" v-model="username" /> -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value" />  -->
        <!-- (<HTMLInputElement>)是一个断言，断言是一个存在的html元素，是ts语法 -->

        <!-- v-model用在组件标签上 -->
        <!-- <LxzInput v-model="username" /> -->

        <!-- <LxzInput :modelValue="username" @update:modelValue="username = $event" /> -->

        <!-- 其他组件库el-UI -->
        <!-- <el-input v-model="username"></el-input> -->

        <!-- 修改modelValue -->
        <LxzInput v-model:ming="username" v-model:mima="password" />
    </div>
</template>

<script setup lang="ts" name="Father">
import LxzInput from './LxzInput.vue'
import { ref } from 'vue'
// 数据
let username = ref('zhangsan')
let password = ref('123456')
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>