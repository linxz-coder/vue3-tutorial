<template>
  <div class="person">
    <h2>姓名： {{ name }}</h2>
    <h2>年龄： {{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <hr>
    <h2>测试1： {{ a }}</h2>
    <h2>测试2： {{ c }}</h2>
    <h2>测试3： {{ d }}</h2>
    <button @click="changeA">修改a</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Person',
  beforeCreate() {
    console.log('beforeCreate')
  },
  data() {
    return {
      a: 100,
      c: this.name,
      d: 900
    }
  },
  methods: {
    changeA() {
      this.a += 1
    }
  },
  setup() {

    // 数据
    let name = '张三' //此时name不是响应式的，修改页面不会变化
    let age = 18
    let tel = '123456789'
    let x = d

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