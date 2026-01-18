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
let name = '李四' // 注意此时的name不是响应式的
let age = '18' // 注意此时的age不是响应式的
let tel = '12345678910' // 注意此时的tel不是响应式的

function changeName() {
    name = '张三'
}

function changeAge() {
    age = '24'
}

function changeTel() {
    tel = '1145141919810'
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