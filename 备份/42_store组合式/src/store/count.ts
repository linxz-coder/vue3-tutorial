import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    // actions里面放置的是一个个的方法，用于响应组件中的”动作“
    actions: {
        increment(value: number) {
           console.log('increment()被调用了', value)
        //修改数据（this指向store对象）
        this.sum += value

        }
    },
    
    // 真正存储数据的地方
    state() {
        return{
            sum: 6,
            school: 'shanghaiU',
            address: '洪福科技园'
        }
    },

    getters: {
        bigSum:state => state.sum*10,
        upperSchool():string{
            return this.school.toUpperCase()
        }
    }
})
