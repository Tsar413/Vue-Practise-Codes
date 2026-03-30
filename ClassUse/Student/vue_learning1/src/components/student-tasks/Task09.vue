<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“是否及格判断”。</p>
      <p>要求：成绩大于等于 60 显示“及格”，否则显示“不及格”。</p>
    </div>
    <div class="todo-block">
      <div class="score-row">
        <span>当前成绩：<!-- TODO --></span>
        <button>切换成绩<!-- TODO: 给按钮补 @click --></button>
      </div>
      <!-- TODO: 使用 v-if / v-else 显示“及格”或“不及格” -->
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

const meta = taskMetaList[8]!
const todoText = `// TODO: 定义 score
// TODO: 补 {{ score }}
// TODO: 给按钮补点击事件
// TODO: 用 v-if / v-else 显示结果`

// TODO: 定义 score
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.score-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
</style>
