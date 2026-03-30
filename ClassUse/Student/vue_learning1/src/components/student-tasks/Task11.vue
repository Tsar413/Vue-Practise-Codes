<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“学生列表渲染”。</p>
      <p>要求：把三名学生姓名渲染成列表。</p>
    </div>
    <ul class="todo-block list">
      <!-- TODO: 使用 v-for 渲染学生列表 -->
    </ul>
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

const meta = taskMetaList[10]!
const todoText = `// TODO: 定义 students 数组
// TODO: 在模板中使用 v-for
// TODO: 为每项补 :key 和 {{ }}`

// TODO: 定义 students
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.list { padding-left: 20px; line-height: 2; font-size: 18px; }
</style>
