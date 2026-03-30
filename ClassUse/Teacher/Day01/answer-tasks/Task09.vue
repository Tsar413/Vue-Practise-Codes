<template>
<TaskPanel v-bind="meta">
  <div class="score-row">
    <span>当前成绩：{{ score }}</span>
    <button @click="score = score >= 60 ? 58 : 78">切换成绩</button>
  </div>
  <p v-if="score >= 60" class="pass">及格</p>
  <p v-else class="fail">不及格</p>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[8]!;
const score = ref(78)
</script>

<style scoped>
.score-row {
  display:flex;
  gap:12px;
  align-items:center;
  flex-wrap:wrap;
}
.pass,.fail {
  margin:16px 0 0;
  font-size:24px;
  font-weight:700;
}
.pass {
  color:#15803d;
}
.fail {
  color:#dc2626;
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
