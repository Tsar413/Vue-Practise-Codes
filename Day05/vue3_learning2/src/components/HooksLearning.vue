<template>
    <div class="person">
        <h2>当前求和为： {{ sum }}, 放大10倍后为{{ bigSum }}</h2>
        <button @click="add()">点击sum + 1</button>
        <hr>
        <img v-for="(item,index) in dogList" :key="index" :src="(item as string)">
        <button @click="again()">再来一只</button>
    </div>
</template>

<script lang="ts" setup defineOptions="ComputedLearning">
    import { computed, reactive, ref, toRef, toRefs, watch, watchEffect } from 'vue';
    import axios from 'axios'

    import useDog from '@/hooks/useDog';
    import useSum from '@/hooks/useSum';

    const {sum, bigSum, add} = useSum()

    const {dogList, again} = useDog()

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

    img {
        height: 100px;
        margin-right: 10px;
    }
</style>