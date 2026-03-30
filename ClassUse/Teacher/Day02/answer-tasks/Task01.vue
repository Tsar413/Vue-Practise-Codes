<template>
  <TaskPanel v-bind="meta">
    <input v-model="nickname" type="text" placeholder="请输入昵称" />
    <p class="result">欢迎你，{{ nickname || '同学' }}</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[0]!
const nickname = ref('')
</script>

<style scoped>
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.result { margin: 14px 0 0; font-size: 22px; font-weight: 700; }
</style>
