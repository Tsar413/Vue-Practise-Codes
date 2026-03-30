<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“标签切换”。</p>
      <p>要求：切换下拉框后，对应标签高亮。</p>
    </div>
    <select>
      <option value="基础语法">基础语法</option>
      <option value="表单绑定">表单绑定</option>
      <option value="计算属性">计算属性</option>
    </select>
    <div class="tags">
      <span class="tag">基础语法</span>
      <span class="tag">表单绑定</span>
      <span class="tag">计算属性</span>
    </div>
    <TaskScaffold summary="补全 select 的 v-model 和标签动态类名。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const todoText = `// TODO: 定义 currentTag
// TODO: 给 select 补 v-model
// TODO: 给三个标签补 :class`

// TODO: 定义 currentTag
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 10px; }
select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
.tags { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
.tag { padding: 10px 14px; border-radius: 999px; background: #e2e8f0; color: #334155; }
</style>
