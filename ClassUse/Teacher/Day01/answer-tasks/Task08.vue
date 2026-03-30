<template>
<TaskPanel v-bind="meta">
  <div class="tag-box">当前标签：{{ tagName }}</div>
  <button @click="tagName = 'Vue 基础班'">选择标签</button>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[7]!;
const tagName = ref('未选择')
</script>

<style scoped>
.tag-box {
  display:inline-block;
  margin-bottom:14px;
  padding:10px 14px;
  border-radius:12px;
  background:#eff6ff;
  color:#1d4ed8;
  font-weight:700;
}
button {
  display:block;
  padding:10px 16px;
  border:none;
  border-radius:12px;
  background:#1d4ed8;
  color:#fff;
  cursor:pointer;
}
</style>
