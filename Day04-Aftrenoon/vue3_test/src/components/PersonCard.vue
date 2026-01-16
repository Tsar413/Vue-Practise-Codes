<template>
    <div class="person">
        <input type="text" v-model="name">{{ name }}
        <input type="text" v-model="age">{{ age }}
        <input type="text" v-model="tel">{{ tel }}
        <button @click="changeName()">更换姓名</button>
        <button @click="changeAge()">更换年龄</button>
        <button @click="changeTel()">更换手机号</button>
    </div>
</template>

<script lang="ts">
    export default{
        name: 'PersonCard',
        data() {
            return {
                name: '张三',
                age: "24",
                tel: '1145141919810'
            }
        },
        methods: {
            changeName(){
                this.name = "李四"
            },
            changeAge(){
                this.age = "18"
            },
            changeTel(){
                this.tel = "12345678910"
            }
        }
    }
</script>

<style scoped>
  .person{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>