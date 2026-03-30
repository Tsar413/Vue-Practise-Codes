<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“高亮文本切换”。</p>
      <p>要求：点击按钮时，文字在普通样式和高亮样式之间切换。</p>
    </div>
    <div class="todo-block">
      <p class="text">Vue 指令需要多练习。</p>
      <!-- TODO: 给上面文本补 :class -->
      <button>切换高亮<!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[4]!
const todoText = `// TODO: 定义 isActive
// TODO: 给文本补 :class
// TODO: 给按钮补点击事件`

// TODO: 定义 isActive
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.text { margin: 0 0 14px; padding: 10px 12px; border-radius: 12px; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
</style>
