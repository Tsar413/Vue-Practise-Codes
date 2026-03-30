<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“课程面板”。</p>
      <p>要求：按分类和关键字筛选课程卡片。</p>
    </div>
    <div class="filters">
      <select>
        <option value="全部">全部</option>
        <option value="基础">基础</option>
        <option value="进阶">进阶</option>
        <option value="项目">项目</option>
      </select>
      <input type="text" placeholder="输入课程关键字" />
    </div>
    <div class="grid">
      <!-- TODO: 对 filteredCourses 使用 v-for -->
    </div>
    <TaskScaffold summary="补全两个输入项、筛选计算属性和卡片渲染。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[8]!
const todoText = `// TODO: 定义 currentCategory
// TODO: 定义 keyword
// TODO: 定义 courses
// TODO: 定义 filteredCourses
// TODO: 在模板中补 v-model 和 v-for`

// TODO: 定义 currentCategory
// TODO: 定义 keyword
// TODO: 定义 courses
// TODO: 定义 filteredCourses
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 10px; }
.filters { display: grid; grid-template-columns: 180px 1fr; gap: 12px; }
select, input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 14px; }
</style>
