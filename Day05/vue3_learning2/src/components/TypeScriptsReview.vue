<template>
    <div class="person">

    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';
    import { type PersonInter, type Persons } from '@/types'

    let person:PersonInter = {id: '1', name: '张三', age: 30}

    let personList:Persons = [
        {id: '1', name: '张三', age: 30},
        {id: '2', name: '李四', age: 18},
        {id: '3', name: '王五', age: 5}
    ]

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