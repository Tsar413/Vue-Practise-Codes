<template>
    <div class="person">
        姓名：<input type="text" v-model="name">{{ name }}
        年龄：<input type="text" v-model="age">{{ age }}
        电话：<input type="text" v-model="tel">{{ tel }}
        <button @click="changeName()">更换姓名</button>
        <button @click="changeAge()">更换年龄</button>
        <button @click="changeTel()">更换手机号</button>
    </div>
</template>

<!-- <script lang="ts">
export default {
    name: 'PersonCard',

}
</script> -->

<script setup lang="ts" defineOptions="PersonCard">
    import { ref } from 'vue'
    let name = ref('李四') 
    let age = ref('18') 
    let tel = ref('12345678910') 
    let address = 'abc' // 注意此时的address不是响应式的

    function changeName() {
        name.value = '张三' // JS中操作ref对象时候需要.value
    }

    function changeAge() {
        age.value = '24'
    }

    function changeTel() {
        tel.value = '1145141919810'
    }
</script>

<style scoped>
.person {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>