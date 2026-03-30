<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“草稿助手”。</p>
      <p>要求：输入草稿后，显示字数和预览。</p>
    </div>
    <textarea rows="5" placeholder="请输入草稿内容"></textarea>
    <p class="count">字数：<!-- TODO --></p>
    <div class="preview"><!-- TODO: 显示草稿预览 --></div>
    <TaskScaffold summary="补全文本域绑定、字数计算和预览展示。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[7]!
const todoText = `// TODO: 定义 draftText
// TODO: 定义 draftLength
// TODO: 给 textarea 补 v-model
// TODO: 在模板中显示字数和预览`

// TODO: 定义 draftText
// TODO: 定义 draftLength
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .count { margin: 0 0 10px; }
textarea { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; resize: vertical; }
.count { margin-top: 12px; color: #475569; }
.preview { margin-top: 12px; padding: 14px; border-radius: 14px; background: #f8fafc; line-height: 1.8; min-height: 60px; }
</style>
