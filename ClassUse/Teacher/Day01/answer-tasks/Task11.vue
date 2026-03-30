<template>
<TaskPanel v-bind="meta">
  <ul class="list">
    <li v-for="student in students" :key="student">{{ student }}</li>
  </ul>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[10]!;
const students = ref(['张三','李四','王五'])
</script>

<style scoped>
.list {
  margin:0;
  padding-left:20px;
  line-height:2;
  font-size:18px;
}
</style>
