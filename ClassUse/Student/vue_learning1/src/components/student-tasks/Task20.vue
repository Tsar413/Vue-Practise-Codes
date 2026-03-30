<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“提交状态面板”。</p>
      <p>要求：点击提交按钮后显示“作业已提交”，并禁用按钮。</p>
    </div>
    <div class="todo-block">
      <button>提交作业<!-- TODO: 给按钮补 :disabled 和 @click --></button>
      <div class="panel">作业已提交。<!-- TODO: 给面板补 v-show --></div>
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

const meta = taskMetaList[19]!
const todoText = `// TODO: 定义 submitted
// TODO: 给按钮补 :disabled 和 @click
// TODO: 给面板补 v-show`

// TODO: 定义 submitted
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
.panel { margin-top: 16px; padding: 16px; border-radius: 14px; background: #ecfeff; border: 1px solid #a5f3fc; }
</style>
