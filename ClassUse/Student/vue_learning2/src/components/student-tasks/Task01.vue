<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“昵称回显”。</p>
      <p>要求：输入框内容变化时，欢迎语同步变化。</p>
    </div>
    <input type="text" placeholder="请输入昵称" />
    <p class="result">欢迎你，<!-- TODO: 显示 nickname 或默认值 --></p>
    <TaskScaffold summary="补全 v-model 和插值表达式。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const todoText = `// TODO: 定义 nickname
// TODO: 给 input 补 v-model
// TODO: 在文本中显示 nickname`

// TODO: 定义 nickname
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .result { margin: 0 0 10px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.result { margin-top: 14px; font-size: 22px; font-weight: 700; }
</style>
