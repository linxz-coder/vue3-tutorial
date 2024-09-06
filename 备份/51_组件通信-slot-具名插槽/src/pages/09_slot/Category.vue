<template>
    <div class="category">
        <slot name="s1">
            <p>默认内容1</p>
        </slot>
        <slot name="s2">
            <p>默认内容2</p>
        </slot>
    </div>
</template>

<script setup lang="ts" name="Category">
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
</style>