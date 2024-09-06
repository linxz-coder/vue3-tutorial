import { reactive, onMounted } from 'vue'
import axios from 'axios';

// https://dog.ceo/api/breed/pembroke/images/random

export default function () {
    // 数据
let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_6341.jpg"
  ])
  
  
  // 方法
  async function addDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breeds/image/random')
      // console.log(result.data.message)
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  // 钩子
  onMounted(() => {
    addDog()
  })

  // 向外部提供东西
  return {
    dogList,
    addDog
  }
}