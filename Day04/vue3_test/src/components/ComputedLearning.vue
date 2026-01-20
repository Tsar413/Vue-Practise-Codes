<template>
    <div class="person">
        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="lastName"><br>
        全名: <span>{{ fullName }}</span>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs } from 'vue';

    let firstName = ref('张')
    let lastName = ref('三')
    // let fullName = computed(() => {
    //     return firstName.value + '-' + lastName.value
    // })

    let fullName = computed({
        get(){
            return firstName.value + '-' + lastName.value
        }, 
        set(val){
            firstName.value = val.split("-")[0] || ''
            lastName.value = val.split("-")[1] || ''
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