<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“分数累加”。</p>
      <p>要求：初始分数为 60，点击按钮后每次加 5 分。</p>
    </div>
    <div class="value"><!-- TODO: 显示 score --></div>
    <button>加 5 分<!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[1]!
const todoText = `// TODO: 定义 score
// TODO: 补 {{ score }}
// TODO: 给按钮补点击事件`

// TODO: 定义 score
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.value { margin-bottom: 14px; font-size: 28px; font-weight: 700; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #1d4ed8; color: #fff; cursor: pointer; }
</style>
