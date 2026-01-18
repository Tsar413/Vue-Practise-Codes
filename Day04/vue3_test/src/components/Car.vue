<template>
    <div class="car">
        <h2>这是一辆{{ car.bange }}车, 价格为{{ car.price }}元</h2>
        <button @click="changePrice()">修改价格</button>
        <button @click="changeCar()">改车</button>
        <ul>
            <li v-for="(car,index) in carList" :key="index">
                汽车品牌：{{ car.bange }} | 价格：{{ car.price }}
                <button @click="del(car.id)">删除</button>
                <button @click="add(car.id)">添加</button>
            </li>
        </ul>
        <h2>这是一辆{{ car2.bange }}车, 价格为{{ car2.price }}元</h2>
        <button @click="add2()">加钱</button>

    </div>
</template>

<script lang="ts" setup defineOptions="Car">
    import { reactive, ref } from 'vue';

    // 数据
    let car = reactive({bange:'宝马',price:100})

    let carList = reactive([
        {id:1, bange:'宝马',price:100},
        {id:2, bange:'奔驰',price:200},
        {id:3, bange:'保时捷',price:300}
    ])

    let car2 = ref({bange:'宝马',price:100})

    function changePrice(){
        car.price += 200
    }

    function del(id: number){
        const index = carList.findIndex(item => item.id === id)
        if (index !== -1) {
            carList.splice(index, 1) // 使用 splice 改变原数组
        }
    }

    function add(id: number){
        const car = carList.find(item => item.id === id)
        if(car){
            car.price += 20 // 每个价格加20
        }
    }

    function add2(){
        car2.value.price += 20
    }

    function changeCar(){
        Object.assign(car, {bange:'大众',price:20})
        car2.value = {bange:'MINI',price:50}
    }
</script> 

<style scoped>
    .car {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    li{
        font-size: 20px;
    }
</style>