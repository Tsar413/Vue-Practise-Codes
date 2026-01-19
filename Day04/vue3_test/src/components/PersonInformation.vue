<template>
    <div class="person">
        <h2 v-for="(item, index) in person" :key="index">
            姓名: {{ item.name }} 年龄: {{ item.age }}
            <button @click="ageAdd(item.id)">年龄增长</button>
        </h2>
        <h2>
            姓名: {{ name }} 班级: {{ classId }} 性别: {{ gender }}
            <button @click="classAdd()">班级增长</button>
        </h2>
    </div>
</template>

<script lang="ts" setup defineOptions="PersonInformation">
    import { reactive, ref, toRef, toRefs } from 'vue';

    // 数据
    let person = reactive([
        {id: 1, name: '张三', age: 18}
    ])

    let person2 = reactive({name: '李四', classId: 2201, gender: '男'})

     // 通过toRefs将person2对象中的n个属性批量取出，且依然保持响应式的能力
    let {name,classId} = toRefs(person2)

    // 通过toRef将person2对象中的gender属性取出，且依然保持响应式的能力
    let gender = toRef(person2, 'gender')

    // 方法
    function ageAdd(id: number){
        const person1 = person.find(item => item.id === id)
        if(person1){
            person1.age++
        }
    }

    function classAdd(){
        classId.value++
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