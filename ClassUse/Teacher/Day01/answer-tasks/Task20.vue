<template>
<TaskPanel v-bind="meta">
  <button :disabled="submitted" @click="submitted = true">提交作业</button>
  <div v-show="submitted" class="panel">作业已提交。</div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[19]!;
const submitted = ref(false)
</script>

<style scoped>
button {
  padding:10px 16px;
  border:none;
  border-radius:12px;
  background:#0f766e;
  color:#fff;
  cursor:pointer;
}
button[disabled] {
  background:#94a3b8;
  cursor:not-allowed;
}
.panel {
  margin-top:16px;
  padding:16px;
  border-radius:14px;
  background:#ecfeff;
  border:1px solid #a5f3fc;
}
</style>
