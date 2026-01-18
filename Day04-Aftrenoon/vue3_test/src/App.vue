<template>
  <div class="app">
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



