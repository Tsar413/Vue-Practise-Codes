<template>
<TaskPanel v-bind="meta">
  <div class="teacher-list">
    <article v-for="teacher in teachers" :key="teacher.name" class="teacher-item">
      <h4>{{ teacher.name }}</h4>
      <p>{{ teacher.subject }}</p>
    </article>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[17]!;
const teachers = ref([{name:'张老师',subject:'Vue 基础'},{name:'李老师',subject:'组件开发'},{name:'王老师',subject:'项目实战'}])
</script>

<style scoped>
.teacher-list {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:12px;
}
.teacher-item {
  padding:14px;
  border-radius:16px;
  background:#f8fafc;
}
h4,p {
  margin:0;
}
h4 {
  margin-bottom:8px;
}
p {
  color:#64748b;
}
</style>
