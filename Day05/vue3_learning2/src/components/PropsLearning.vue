<template>
    <div class="person">
        <ul>
            <li v-for="(item, index) in list" :key="item.id">
                {{ item.name }} ----- {{ item.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import type { Persons } from '@/types';
    import { computed, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';

    // 只接收list
    // defineProps(['list'])

    // 接收list, 同时将props保存起来
    // let x = defineProps(['list'])
    // console.log(x.list)

    // 接收list+限制类型
    // defineProps<{ list: Persons }>()

    // 第三种写法：接收+限制类型+指定默认值+限制必要性
    let props = withDefaults(defineProps<{ list?: Persons }>(), {
        list: () => [{ id: 'asdasg01', name: '小猪佩奇', age: 18 }]
    })

</script>

<style scoped>
    .person {
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }

    li {
        font-size: 20px;
    }
</style>