<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“课程信息展示”。</p>
      <p>要求：展示课程名称、授课教师、上课教室。</p>
    </div>
    <div class="todo-block">
      <div class="item">课程名称：<!-- TODO --></div>
      <div class="item">授课教师：<!-- TODO --></div>
      <div class="item">上课教室：<!-- TODO --></div>
    </div>
    <TaskScaffold
      summary="补全 script 和 template。"
      :code-hint="todoText"
    />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const todoText = `// TODO: 定义课程信息数据
// TODO: 补三处插值表达式`

// TODO: 定义课程信息数据
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { display: grid; gap: 10px; margin-top: 14px; }
.item { padding: 12px 14px; border-radius: 12px; background: #f8fafc; }
</style>
