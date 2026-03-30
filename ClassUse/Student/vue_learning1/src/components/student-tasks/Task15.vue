<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“按钮悬停提示”。</p>
      <p>要求：鼠标移入按钮时显示提示文字。</p>
    </div>
    <div class="todo-block">
      <button>鼠标移入查看提示<!-- TODO: 给按钮补 :title --></button>
      <p class="desc">当前提示：<!-- TODO --></p>
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

const meta = taskMetaList[14]!
const todoText = `// TODO: 定义 tip
// TODO: 给按钮补 :title
// TODO: 在文本中补 {{ tip }}`

// TODO: 定义 tip
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
.desc { margin: 12px 0 0; color: #64748b; }
</style>
