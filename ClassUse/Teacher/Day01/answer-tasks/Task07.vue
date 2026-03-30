<template>
<TaskPanel v-bind="meta">
  <div class="value">数字：{{ number }}</div>
  <button @click="number++">点我 +1</button>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[6]!;
const number = ref(0)
</script>

<style scoped>
.value {
  margin-bottom:14px;
  font-size:28px;
  font-weight:700;
}
button {
  padding:10px 16px;
  border:none;
  border-radius:12px;
  background:#7c3aed;
  color:#fff;
  cursor:pointer;
}
</style>
