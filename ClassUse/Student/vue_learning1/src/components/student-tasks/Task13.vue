<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“通知板列表渲染”。</p>
      <p>要求：页面连续显示多条通知内容。</p>
    </div>
    <div class="todo-block notice-list">
      <!-- TODO: 使用 v-for 渲染通知列表 -->
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

const meta = taskMetaList[12]!
const todoText = `// TODO: 定义 notices 数组
// TODO: 在模板中使用 v-for
// TODO: 为每项补 :key 和 {{ }}`

// TODO: 定义 notices
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.notice-list { display: grid; gap: 12px; }
</style>
