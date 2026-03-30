<template>
<TaskPanel v-bind="meta">
  <div class="value">当前分数：{{ score }}</div>
  <button @click="score += 5">加 5 分</button>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[1]!;
const score = ref(60)
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
  background:#1d4ed8;
  color:#fff;
  cursor:pointer;
}
</style>
