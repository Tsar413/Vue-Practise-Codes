<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>人名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName()">修改名字</button>
        <button @click="changeAge()">修改年龄</button>
        <button @click="changePerson()">修改整个人</button>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs, watch } from 'vue';

    let person = reactive({name: '张三', age: 16})

    function changeName(){
        person.name = '李四'
    }

    function changeAge(){
        person.age = 18
    }

    function changePerson(){
        person.name = '李四'
        person.age = 18
    }

    // 监视
    watch(person,(newValue, oldValue) => {
        console.log(newValue)
    },{deep:true})

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