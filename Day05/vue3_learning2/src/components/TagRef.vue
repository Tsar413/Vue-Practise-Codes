<template>
    <div class="person">
        <h1>联合王国</h1>
        <h2 ref="country">英格兰</h2>
        <h3 ref="city">伦敦</h3>
        <h4>国王十字圣潘克拉斯</h4>
        <button @click="showLog()">点我输出内容</button>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';

    // 创建一个变量，用来存储ref标记的内容
    let country = ref()
    let city = ref()

    function showLog(){
        console.log(country.value)
    }

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