<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“教师列表渲染”。</p>
      <p>要求：每项显示教师姓名和授课方向。</p>
    </div>
    <div class="todo-block teacher-list">
      <!-- TODO: 使用 v-for 渲染教师列表 -->
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

const meta = taskMetaList[17]!
const todoText = `// TODO: 定义 teachers 数组
// TODO: 在模板中使用 v-for
// TODO: 为每项补 :key 和 {{ }}`

// TODO: 定义 teachers
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.teacher-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; }
</style>
