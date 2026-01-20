<template>
  <div class="app">
    <!-- <PersonCard />
    <Car />
    <PersonInformation />
    <ComputedLearning /> -->
    <!-- <WatchLearning1 />
    <WatchLearning2 />
    <WatchLearning4 /> -->
    <watchEffectLearning />
  </div>
</template>

<script lang="ts">
  import PersonCard from './components/PersonCard.vue';
  import Car from './components/Car.vue'
  import PersonInformation from './components/PersonInformation.vue';
  import ComputedLearning from './components/ComputedLearning.vue';
  import WatchLearning1 from './components/WatchLearning1.vue';
  import WatchLearning2 from './components/WatchLearning2.vue';
  import WatchLearning4 from './components/WatchLearning4.vue';
  import WatchEffectLearning from './components/WatchEffectLearning.vue';
import { watch } from 'vue';

  export default {
    name: 'App', // 组件名
    components:{PersonCard,Car,PersonInformation,ComputedLearning,
      WatchLearning1,WatchLearning2,WatchLearning4,WatchEffectLearning} // 注册组件
  }
</script>



