<template>
  <div class="person">
    <h2>姓名： {{ name }}</h2>
    <h2>年龄： {{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  beforeCreate() {
    console.log('beforeCreate')
  },
  setup() {
    console.log('setup') // setup早于beforeCreate执行
    console.log('this:', this) // undefined, vue3中弱化了this
    // 数据
    let name = '张三' //此时name不是响应式的，修改页面不会变化
    let age = 18
    let tel = '123456789'

    // 方法
    function changeName() {
      name = 'zhangsan'
      console.log(name) // name确实改了，但name不是响应式的
    }
    function changeAge() {
      age += 1
    }
    function showTel() {
      alert(tel)
    }

    return { name, age, changeName, changeAge, showTel }

    // setup的返回值也可以是一个渲染函数
    // return () => '哈哈'

  }
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
  /* 上下0 左右5px */
}
</style>