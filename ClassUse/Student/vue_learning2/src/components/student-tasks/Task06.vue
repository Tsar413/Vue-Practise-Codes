<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“搜索提示”。</p>
      <p>要求：根据输入内容显示不同搜索提示。</p>
    </div>
    <input type="text" placeholder="请输入搜索关键字" />
    <p class="tip"><!-- TODO: 显示搜索提示 --></p>
    <TaskScaffold summary="补全输入框绑定和提示计算。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[5]!
const todoText = `// TODO: 定义 keyword
// TODO: 定义 searchTip
// TODO: 给 input 补 v-model
// TODO: 在模板中显示 searchTip`

// TODO: 定义 keyword
// TODO: 定义 searchTip
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .tip { margin: 0 0 10px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.tip { margin-top: 14px; color: #475569; }
</style>
