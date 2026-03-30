<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“课程报名”。</p>
      <p>要求：勾选协议后按钮才可点击，并显示当前状态。</p>
    </div>
    <label class="row">
      <input type="checkbox" />
      我已阅读并同意报名协议
    </label>
    <button>立即报名<!-- TODO: 给按钮补 :disabled --></button>
    <p class="tip"><!-- TODO: 用条件渲染显示当前状态 --></p>
    <TaskScaffold summary="补全 checkbox 绑定、按钮状态和提示文本。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const todoText = `// TODO: 定义 agree
// TODO: 给 checkbox 补 v-model
// TODO: 给按钮补 :disabled
// TODO: 用 v-if / v-else 显示状态`

// TODO: 定义 agree
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .tip { margin: 0 0 10px; }
.row { display: flex; gap: 10px; align-items: center; margin-bottom: 14px; color: #334155; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #ea580c; color: #fff; cursor: pointer; }
.tip { margin-top: 12px; }
</style>
