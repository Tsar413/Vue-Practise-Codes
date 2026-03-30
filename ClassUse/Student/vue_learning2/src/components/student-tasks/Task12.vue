<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“学习计划表”。</p>
      <p>要求：按分类和状态筛选计划，并统计完成情况。</p>
    </div>
    <div class="filters">
      <select>
        <option value="全部">全部分类</option>
        <option value="基础">基础</option>
        <option value="进阶">进阶</option>
        <option value="项目">项目</option>
      </select>
      <select>
        <option value="全部">全部状态</option>
        <option value="已完成">已完成</option>
        <option value="未完成">未完成</option>
      </select>
    </div>
    <div class="stats">
      <span>已完成：<!-- TODO --></span>
      <span>未完成：<!-- TODO --></span>
    </div>
    <div class="list">
      <!-- TODO: 对 filteredPlans 使用 v-for -->
    </div>
    <TaskScaffold summary="补全两个筛选项、统计计算属性和列表渲染。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[11]!
const todoText = `// TODO: 定义 currentCategory
// TODO: 定义 currentStatus
// TODO: 定义 plans
// TODO: 定义 completedCount、pendingCount、filteredPlans
// TODO: 在模板中补 v-model 和 v-for`

// TODO: 定义 currentCategory
// TODO: 定义 currentStatus
// TODO: 定义 plans
// TODO: 定义 completedCount
// TODO: 定义 pendingCount
// TODO: 定义 filteredPlans
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 10px; }
.filters { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.stats { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 14px; font-weight: 700; }
.list { display: grid; gap: 12px; margin-top: 14px; }
</style>
