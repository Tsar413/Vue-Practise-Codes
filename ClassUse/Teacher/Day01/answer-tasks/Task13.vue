<template>
<TaskPanel v-bind="meta">
  <div class="notice-list">
    <article v-for="item in notices" :key="item" class="notice-item">{{ item }}</article>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[12]!;
const notices = ref(['今晚 8 点前提交 Day01 练习代码。','明天上课前检查开发环境与浏览器控制台报错。','完成课程卡片题后，尝试自行新增一门课程。'])
</script>

<style scoped>
.notice-list {
  display:grid;
  gap:12px;
}
.notice-item {
  padding:14px 16px;
  border-left:4px solid #14b8a6;
  border-radius:14px;
  background:#f0fdfa;
  line-height:1.8;
}
</style>
