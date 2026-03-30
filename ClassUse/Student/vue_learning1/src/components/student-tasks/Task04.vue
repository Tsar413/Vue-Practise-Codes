<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“公告文字展示”。</p>
      <p>要求：公告内容通过数据输出，不直接写死在标签中。</p>
    </div>
    <p class="notice"><!-- TODO: 显示 notice --></p>
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

const meta = taskMetaList[3]!
const todoText = `// TODO: 定义 notice
// TODO: 补 {{ notice }}`

// TODO: 定义 notice
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.notice { margin-top: 14px; padding: 18px; border-left: 5px solid #14b8a6; border-radius: 16px; background: #f0fdfa; font-size: 20px; }
</style>
