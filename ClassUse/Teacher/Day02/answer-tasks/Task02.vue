<template>
  <TaskPanel v-bind="meta">
    <label class="row">
      <input v-model="agree" type="checkbox" />
      我已阅读并同意报名协议
    </label>
    <button :disabled="!agree">立即报名</button>
    <p v-if="agree" class="ok">状态：可以报名</p>
    <p v-else class="fail">状态：请先勾选协议</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[1]!
const agree = ref(false)
</script>

<style scoped>
.row { display: flex; gap: 10px; align-items: center; margin-bottom: 14px; color: #334155; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #ea580c; color: #fff; cursor: pointer; }
button[disabled] { background: #94a3b8; cursor: not-allowed; }
.ok { color: #15803d; }
.fail { color: #dc2626; }
</style>
