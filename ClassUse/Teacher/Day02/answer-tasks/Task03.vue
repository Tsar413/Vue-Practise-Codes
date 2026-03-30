<template>
  <TaskPanel v-bind="meta">
    <select v-model="currentTag">
      <option value="基础语法">基础语法</option>
      <option value="表单绑定">表单绑定</option>
      <option value="计算属性">计算属性</option>
    </select>
    <div class="tags">
      <span :class="['tag', { active: currentTag === '基础语法' }]">基础语法</span>
      <span :class="['tag', { active: currentTag === '表单绑定' }]">表单绑定</span>
      <span :class="['tag', { active: currentTag === '计算属性' }]">计算属性</span>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[2]!
const currentTag = ref('基础语法')
</script>

<style scoped>
select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
.tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
.tag { padding: 10px 14px; border-radius: 999px; background: #e2e8f0; color: #334155; }
.active { background: #ffedd5; color: #9a3412; }
</style>
