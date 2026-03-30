<template>
<TaskPanel v-bind="meta">
  <p :class="['text',{highlight:isActive}]">Vue 指令需要多练习。</p>
  <button @click="isActive = !isActive">切换高亮</button>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[4]!;
const isActive = ref(true)
</script>

<style scoped>
.text {
  margin:0 0 14px;
  padding:10px 12px;
  border-radius:12px;
}
.highlight {
  color:#115e59;
  background:#ccfbf1;
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
