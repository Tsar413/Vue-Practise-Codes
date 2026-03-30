<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“温度顾问”。</p>
      <p>要求：输入温度后，显示对应建议文本。</p>
    </div>
    <input type="number" placeholder="请输入温度" />
    <p class="result"><!-- TODO: 显示 computed 结果 --></p>
    <TaskScaffold summary="补全输入绑定和计算属性。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[4]!
const todoText = `// TODO: 定义 temperature
// TODO: 定义 advisorText
// TODO: 给 input 补 v-model.number
// TODO: 在模板中显示 advisorText`

// TODO: 定义 temperature
// TODO: 定义 advisorText
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .result { margin: 0 0 10px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.result { margin-top: 14px; padding: 14px; border-radius: 14px; background: #fff7ed; color: #9a3412; }
</style>
