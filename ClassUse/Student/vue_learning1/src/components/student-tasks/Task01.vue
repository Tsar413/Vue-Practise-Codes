<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“点击次数”。</p>
      <p>要求：页面显示次数，点击按钮后数字递增。</p>
    </div>
    <div class="value"><!-- TODO: 显示 count --></div>
    <button>点击加一<!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[0]!
const todoText = `// TODO: 定义 count
// TODO: 补 {{ count }}
// TODO: 给按钮补点击事件`

// TODO: 定义 count
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.value { margin-bottom: 14px; font-size: 28px; font-weight: 700; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
</style>
