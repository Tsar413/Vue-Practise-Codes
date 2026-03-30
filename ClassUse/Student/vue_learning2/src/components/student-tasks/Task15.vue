<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“值班安排表”。</p>
      <p>要求：根据星期和关键字筛选值班安排。</p>
    </div>
    <div class="filters">
      <select>
        <option value="全部">全部星期</option>
        <option value="周一">周一</option>
        <option value="周二">周二</option>
        <option value="周三">周三</option>
        <option value="周四">周四</option>
        <option value="周五">周五</option>
      </select>
      <input type="text" placeholder="搜索姓名或区域" />
    </div>
    <div class="list">
      <!-- TODO: 对 filteredDuties 使用 v-for -->
    </div>
    <TaskScaffold summary="补全筛选绑定、计算属性和列表渲染。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[14]!
const todoText = `// TODO: 定义 currentDay
// TODO: 定义 keyword
// TODO: 定义 duties
// TODO: 定义 filteredDuties
// TODO: 在模板中补 v-model 和 v-for`

// TODO: 定义 currentDay
// TODO: 定义 keyword
// TODO: 定义 duties
// TODO: 定义 filteredDuties
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 10px; }
.filters { display: grid; grid-template-columns: 180px 1fr; gap: 12px; }
select, input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.list { display: grid; gap: 12px; margin-top: 14px; }
</style>
