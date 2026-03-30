<template>
<TaskPanel v-bind="meta">
  <div class="info-grid">
    <div class="item">
      <span>课程名称</span>
      <strong>{{ courseName }}</strong>
    </div>
    <div class="item">
      <span>授课教师</span>
      <strong>{{ teacherName }}</strong>
    </div>
    <div class="item">
      <span>上课教室</span>
      <strong>{{ classRoom }}</strong>
    </div>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[2]!;
const courseName = ref('Vue 前端框架技术应用实训');
const teacherName = ref('张老师');
const classRoom = ref('实训楼 305')
</script>

<style scoped>
.info-grid {
  display:grid;
  gap:12px;
}
.item {
  padding:14px 16px;
  border-radius:14px;
  background:#f8fafc;
}
.item span {
  display:block;
  margin-bottom:6px;
  color:#64748b;
}
</style>
