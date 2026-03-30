<template>
<TaskPanel v-bind="meta">
  <div class="row">
    <button @click="isSigned = !isSigned">切换签到状态</button>
    <strong v-if="isSigned" class="ok">已签到</strong>
    <strong v-else class="fail">未签到</strong>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[16]!;
const isSigned = ref(false)
</script>

<style scoped>
.row {
  display:flex;
  gap:14px;
  align-items:center;
  flex-wrap:wrap;
}
button {
  padding:10px 16px;
  border:none;
  border-radius:12px;
  background:#0f766e;
  color:#fff;
  cursor:pointer;
}
.ok {
  color:#15803d;
}
.fail {
  color:#dc2626;
}
</style>
