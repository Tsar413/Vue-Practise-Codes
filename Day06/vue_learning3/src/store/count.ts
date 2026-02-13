import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
    // 真正存储数据的地方
    state(){
        return {
            sum: 6,
            school: 'atguigu',
            address: 'afawef'
        }
    },
    // actions里面放置的是一个一个的动作函数，用于相应组件中的动作
    actions: {
        // 加
        increment(value:number){
            this.sum += value
        },
        // 减
        decrement(value:number){
            this.sum -= value
        }
    }, 
    getters: {
        bigSum:(state):number => state.sum * 10,
        upperSchool():string{
            return this.school.toUpperCase()
        }
    }
})