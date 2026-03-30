<template>
<TaskPanel v-bind="meta">
  <div class="notice">{{ notice }}</div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[3]!;
const notice = ref('本周五下午进行班级卫生检查。')
</script>

<style scoped>
.notice {
  padding:18px;
  border-left:5px solid #14b8a6;
  border-radius:16px;
  background:#f0fdfa;
  font-size:20px;
}
</style>
