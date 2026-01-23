<template>
  <div class="app">
    <!-- <watchEffectLearning />
    <TagRef /> -->
    <!-- <TypeScriptsReview /> -->
    <PropsLearning :list="personList" />  
    <HooksLearning />
  </div>
</template>

<script lang="ts" setup name="App">
  import WatchEffectLearning from './components/WatchEffectLearning.vue';
  import TagRef from './components/TagRef.vue';
  import TypeScriptsReview from './components/TypeScriptsReview.vue';
  import PropsLearning from './components/PropsLearning.vue';
  import HooksLearning from './components/HooksLearning.vue';
  import { reactive } from 'vue';
  import { type Persons } from '@/types'

  let personList = reactive<Persons>([
    { id: '1', name: '张三', age: 30 },
    { id: '2', name: '李四', age: 18 },
    { id: '3', name: '王五', age: 5, x: 9 }
  ])

</script>
