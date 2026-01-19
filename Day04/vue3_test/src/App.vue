<template>
  <div class="app">
    <PersonCard />
    <Car />
    <PersonInformation />
  </div>
</template>

<script lang="ts">
  import PersonCard from './components/PersonCard.vue';
  import Car from './components/Car.vue'
  import PersonInformation from './components/PersonInformation.vue';

  export default {
    name: 'App', // 组件名
    components:{PersonCard,Car,PersonInformation} // 注册组件
  }
</script>



