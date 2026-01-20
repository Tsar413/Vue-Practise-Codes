<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>和为{{ sum }}</h2>
        <button @click="add()">点击按钮增加</button>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs, watch } from 'vue';

    let sum = ref(0)
    let number = 1

    function add(){
        sum.value += number
        number++
    }

    // 监视
    watch(sum, (newValue, oldValue) => {
        if(newValue > 50){
            sum.value = 0
            number = 1
        }
    })
</script> 

<style scoped>
    .person {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    li{
        font-size: 20px;
    }
</style>