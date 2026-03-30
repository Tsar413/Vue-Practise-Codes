<template>
<TaskPanel v-bind="meta">
  <div class="tabs">
    <button v-for="item in categories" :key="item" :class="{ active: currentCategory === item }" @click="currentCategory = item">{{ item }}</button>
  </div>
  <p class="title">当前分类：{{ currentCategory }}</p>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[18]!;
const categories = ref(['基础语法','事件交互','列表渲染']);
const currentCategory = ref('基础语法')
</script>

<style scoped>
.tabs {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  margin-bottom:14px;
}
button {
  padding:10px 16px;
  border:1px solid #cbd5e1;
  border-radius:999px;
  background:#fff;
  color:#334155;
  cursor:pointer;
}
.active {
  border-color:#14b8a6;
  background:#ccfbf1;
  color:#115e59;
}
.title {
  margin:0;
  font-size:20px;
  font-weight:700;
}
</style>
