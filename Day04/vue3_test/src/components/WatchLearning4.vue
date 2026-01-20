<template>
    <div class="person">
        <h2>姓名: {{ person.name }}</h2>
        <h2>年龄: {{ person.age }}</h2>
        <h2>汽车: {{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改所有车</button>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs, watch } from 'vue';

    // 数据
    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '宝马',
            c2: '奔驰'
        }
    })

    function changeName(){
        person.name = '李四'
    }

    function changeAge(){
        person.age = 24
    }

    function changeC1(){
        person.car.c1 = '保时捷'
    }

    function changeC2(){
        person.car.c2 = 'MINI'
    }

    function changeCar(){
        person.car = {c1:'保时捷',c2:'MINI'}
    }

    // watch(() => person.car, (newValue, oldValue) => {
    //     alert("汽车变化" + newValue)
    // },{deep:true})

    watch([() => person.car.c1, () => person.name], (newValue, oldValue) => {
        alert("变化" + newValue)
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