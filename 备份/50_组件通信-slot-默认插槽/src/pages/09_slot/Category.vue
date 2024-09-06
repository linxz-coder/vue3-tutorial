<template>
    <div class="category">
        <h2>{{ title }}</h2>
        <slot>
            <p>默认内容</p>
        </slot>
    </div>
</template>

<script setup lang="ts" name="Category">
defineProps(['title'])
</script>

<style scoped>
.category {
    background-color: skyblue;
    border-radius: 10px;
    /* 圆角 */
    box-shadow: 0 0 10px black;
    /* 阴影 */
    padding: 10px;
    width: 200px;
    height: 300px;
}

h2 {
    text-align: center;
    background-color: orange;
    font-size: 20px;
    font-weight: 800;
}
</style>