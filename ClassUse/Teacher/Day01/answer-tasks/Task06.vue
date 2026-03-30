<template>
<TaskPanel v-bind="meta">
  <div class="row">
    <button :disabled="isDisabled">提交作业</button>
    <button class="ghost" @click="isDisabled = !isDisabled">切换禁用状态</button>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[5]!;
const isDisabled = ref(true)
</script>

<style scoped>
.row {
  display:flex;
  gap:12px;
  flex-wrap:wrap;
}
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
.ghost {
  background:#e2e8f0;
  color:#1e293b;
}
</style>
