<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“排课筛选”。</p>
      <p>要求：输入关键字后，只显示匹配的课程。</p>
    </div>
    <input type="text" placeholder="搜索课程" />
    <ul class="list">
      <!-- TODO: 对 filteredCourses 使用 v-for -->
    </ul>
    <TaskScaffold summary="补全关键字绑定、计算属性和列表渲染。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[6]!
const todoText = `// TODO: 定义 keyword
// TODO: 定义 courseList
// TODO: 定义 filteredCourses
// TODO: 在模板中补 v-model 和 v-for`

// TODO: 定义 keyword
// TODO: 定义 courseList
// TODO: 定义 filteredCourses
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 10px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.list { margin: 14px 0 0; padding-left: 20px; line-height: 2; }
</style>
