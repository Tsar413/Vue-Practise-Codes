<template>
  <div class="app">
    <h1>你好</h1>
    <PersonCard />
  </div>
</template>

<script lang="ts">
  import PersonCard from './components/PersonCard.vue';

  export default {
    name: 'App', // 组件名
    components:{PersonCard} // 注册组件
  }
</script>

<style>
  .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }

</style>


