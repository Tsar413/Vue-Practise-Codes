<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“按钮禁用状态切换”。</p>
      <p>要求：点击切换按钮时，提交按钮在可用和禁用之间切换。</p>
    </div>
    <div class="todo-block row">
      <button>提交作业<!-- TODO: 给按钮补 :disabled --></button>
      <button class="ghost">切换禁用状态<!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[5]!
const todoText = `// TODO: 定义 isDisabled
// TODO: 给第一颗按钮补 :disabled
// TODO: 给第二颗按钮补点击事件`

// TODO: 定义 isDisabled
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.row { display: flex; gap: 12px; flex-wrap: wrap; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
.ghost { background: #e2e8f0; color: #1e293b; }
</style>
