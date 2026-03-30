<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“点击加一”。</p>
      <p>要求：点击按钮后，页面中的数字每次加 1。</p>
    </div>
    <div class="todo-block">
      <div class="value"><!-- TODO: 显示 number --></div>
      <button>点我 +1<!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[6]!
const todoText = `// TODO: 定义 number
// TODO: 补 {{ number }}
// TODO: 给按钮补点击事件`

// TODO: 定义 number
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.value { margin-bottom: 14px; font-size: 28px; font-weight: 700; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #7c3aed; color: #fff; cursor: pointer; }
</style>
