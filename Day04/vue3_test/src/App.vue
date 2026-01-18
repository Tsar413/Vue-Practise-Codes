<template>
  <div class="app">
    <PersonCard />
    <Car />
  </div>
</template>

<script lang="ts">
  import PersonCard from './components/PersonCard.vue';
  import Car from './components/Car.vue'

  export default {
    name: 'App', // 组件名
    components:{PersonCard,Car} // 注册组件
  }
</script>



