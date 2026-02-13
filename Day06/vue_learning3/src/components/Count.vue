<template>
  <div class="count">
    <h2>当前求和为：{{ bigSum }}</h2>
    <h3>{{ address }}</h3>
    <h3>{{ school }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<script setup lang="ts" name="Count">
  import { ref } from "vue";
  import { useCountStore } from '@/store/count'
  /* 引入storeToRefs */
  import { storeToRefs } from 'pinia'
  // 数据 

  const countStore = useCountStore()

  /* 使用storeToRefs转换countStore，随后解构 */
  const { sum,address,school,bigSum } = storeToRefs(countStore)

  let n = ref(1) // 用户选择的数字

  // 方法
  function add(){
    // 第一种修改方式，直接修改
    countStore.sum += n.value
    // 第二种修改方式，批量修改
    countStore.$patch({
      school: 'aaaa',
      address: 'aef'
    })
    // 第三种修改方法
    countStore.increment(n.value)
  }

  function minus(){
    // 第三种修改方法
    countStore.decrement(n.value)
  }
</script>

<style scoped>
  .count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  select,button {
    margin: 0 5px;
    height: 25px;
  }
</style>