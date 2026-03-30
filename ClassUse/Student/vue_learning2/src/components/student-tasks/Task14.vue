<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“技能评级器”。</p>
      <p>要求：输入练习得分后，显示技能等级并切换样式。</p>
    </div>
    <input type="number" placeholder="请输入练习得分" />
    <div class="level-card">
      <strong>当前等级：<!-- TODO --></strong>
    </div>
    <TaskScaffold summary="补全分数绑定、等级计算和动态类名。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[13]!
const todoText = `// TODO: 定义 score
// TODO: 定义 levelText
// TODO: 定义 levelClass
// TODO: 给 input 补 v-model.number
// TODO: 给等级卡片补 :class`

// TODO: 定义 score
// TODO: 定义 levelText
// TODO: 定义 levelClass
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 10px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.level-card { margin-top: 14px; padding: 18px; border-radius: 16px; background: #f8fafc; }
</style>
