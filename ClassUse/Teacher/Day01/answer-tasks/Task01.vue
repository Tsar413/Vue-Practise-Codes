<template>
<TaskPanel v-bind="meta">
  <div class="value">当前点击次数：{{ count }}</div>
  <button @click="count++">点击加一</button>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[0]!;
const count = ref(0)
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
  background:#0f766e;
  color:#fff;
  cursor:pointer;
}
</style>
