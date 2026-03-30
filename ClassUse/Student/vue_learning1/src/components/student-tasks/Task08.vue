<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“标签名切换”。</p>
      <p>要求：初始显示“未选择”，点击按钮后显示“Vue 基础班”。</p>
    </div>
    <div class="todo-block">
      <div class="tag-box">当前标签：<!-- TODO --></div>
      <button>选择标签<!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[7]!
const todoText = `// TODO: 定义 tagName
// TODO: 补 {{ tagName }}
// TODO: 给按钮补点击事件`

// TODO: 定义 tagName
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.tag-box { display: inline-block; margin-bottom: 14px; padding: 10px 14px; border-radius: 12px; background: #eff6ff; color: #1d4ed8; font-weight: 700; }
button { display: block; padding: 10px 16px; border: none; border-radius: 12px; background: #1d4ed8; color: #fff; cursor: pointer; }
</style>
