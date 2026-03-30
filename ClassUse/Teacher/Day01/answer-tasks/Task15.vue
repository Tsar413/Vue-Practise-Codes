<template>
<TaskPanel v-bind="meta">
  <button :title="tip">鼠标移入查看提示</button>
  <p class="desc">当前提示：{{ tip }}</p>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[14]!;
const tip = ref('点击这里打开 Day01 练习说明')
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
.desc {
  margin:12px 0 0;
  color:#64748b;
}
</style>
