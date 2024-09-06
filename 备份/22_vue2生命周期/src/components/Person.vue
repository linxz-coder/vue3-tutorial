<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script>


export default {
    /* eslint-disable */
    name: 'Person',
    data() {
        return {
            sum: 1
        }
    },
    methods: {
        changeSum() {
            this.sum += 1
        }
    },
    // 创建前的钩子
    beforeCreate() {
        console.log('beforeCreate()')
    },
    // 创建后的钩子
    created() {
        console.log('created()')
    },
    // 挂载前的钩子
    beforeMount() {
        console.log('beforeMount()')
    },
    // 挂载后的钩子
    mounted() {
        console.log('mounted()')
    },
    // 更新前的钩子
    beforeUpdate() {
        console.log('beforeUpdate()')
    },
    // 更新后的钩子
    updated() {
        console.log('updated()')
    },
    // 销毁前的钩子
    beforeDestroy() {
        console.log('beforeDestroy()')
    },
    // 销毁后的钩子
    destroyed() {
        console.log('destroyed()')
    }
}
</script>

<style scoped>
.person {
    background-color: skyblue;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px;
}
</style>
