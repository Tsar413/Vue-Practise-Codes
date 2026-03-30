<template>
<TaskPanel v-bind="meta">
  <button @click="buttonText = buttonText === '开始学习' ? '继续学习' : '开始学习'">{{ buttonText }}</button>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[15]!;
const buttonText = ref('开始学习')
</script>

<style scoped>
button {
  padding:10px 18px;
  border:none;
  border-radius:12px;
  background:#1d4ed8;
  color:#fff;
  cursor:pointer;
}
</style>
