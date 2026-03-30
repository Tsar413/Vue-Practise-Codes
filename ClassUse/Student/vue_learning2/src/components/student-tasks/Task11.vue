<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“通知中心”。</p>
      <p>要求：按通知类型和关键字过滤通知列表。</p>
    </div>
    <div class="filters">
      <select>
        <option value="全部">全部</option>
        <option value="课程">课程</option>
        <option value="作业">作业</option>
        <option value="活动">活动</option>
      </select>
      <input type="text" placeholder="输入通知关键字" />
    </div>
    <p class="count">当前通知数：<!-- TODO --></p>
    <div class="list">
      <!-- TODO: 对 filteredNotices 使用 v-for -->
    </div>
    <TaskScaffold summary="补全筛选条件、计算属性和通知列表。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[10]!
const todoText = `// TODO: 定义 currentType
// TODO: 定义 keyword
// TODO: 定义 notices
// TODO: 定义 filteredNotices
// TODO: 在模板中显示数量并补 v-for`

// TODO: 定义 currentType
// TODO: 定义 keyword
// TODO: 定义 notices
// TODO: 定义 filteredNotices
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .count { margin: 0 0 10px; }
.filters { display: grid; grid-template-columns: 180px 1fr; gap: 12px; }
select, input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.count { margin-top: 14px; font-weight: 700; }
.list { display: grid; gap: 12px; margin-top: 12px; }
</style>
