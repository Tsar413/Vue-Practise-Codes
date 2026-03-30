<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“签到状态切换”。</p>
      <p>要求：根据状态显示“已签到”或“未签到”。</p>
    </div>
    <div class="todo-block row">
      <button>切换签到状态<!-- TODO: 给按钮补 @click --></button>
      <!-- TODO: 使用 v-if / v-else 显示状态文字 -->
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

const meta = taskMetaList[16]!
const todoText = `// TODO: 定义 isSigned
// TODO: 给按钮补点击事件
// TODO: 用 v-if / v-else 显示状态`

// TODO: 定义 isSigned
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.row { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
</style>
