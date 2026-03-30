<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“课程卡片渲染”。</p>
      <p>要求：每张卡片显示课程名称、图片和简介。</p>
    </div>
    <div class="todo-block course-list">
      <!-- TODO: 使用 v-for 渲染课程卡片 -->
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

const meta = taskMetaList[11]!
const todoText = `// TODO: 定义 courses 数组
// TODO: 在模板中按卡片结构写 v-for
// TODO: 补 :src、:alt、{{ }}`

// TODO: 定义 courses
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.course-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 14px; }
</style>
