<template>
<TaskPanel v-bind="meta">
  <button @click="isShow = !isShow">切换课程详情</button>
  <div v-show="isShow" class="panel">这里是课程详情面板：学习 Vue 基础指令与响应式数据。</div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[9]!;
const isShow = ref(true)
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
.panel {
  margin-top:16px;
  padding:16px;
  border-radius:14px;
  background:#ecfeff;
  border:1px solid #a5f3fc;
  line-height:1.8;
}
</style>
