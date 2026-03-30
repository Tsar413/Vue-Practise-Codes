<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>综合题把 SearchBar、CourseCard 和课程数组组合起来，完成一个可搜索的课程展示板。</p>
    </div>
    <div class="combo-shell">
      <input type="text" placeholder="搜索课程" />
      <div class="combo-list">
        <article class="combo-card">
          <h4>Vue 组件开发</h4>
          <p>讲师：李老师</p>
        </article>
        <article class="combo-card">
          <h4>Emit 事件练习</h4>
          <p>讲师：陈老师</p>
        </article>
      </div>
    </div>
    <TaskScaffold summary="父组件维护 courseList 和 keyword；学生自己在 src/components/student-build/ 中创建 SearchBar 和 CourseCard，再组合成课程展示板。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[10]!
const todoText = `已学知识点提示：
1. 父组件维护 courseList 和 keyword。
2. 在 src/components/student-build/SearchBar.vue 中实现 emit 回传关键词。
3. computed 返回 filteredList。
4. 在 src/components/student-build/CourseCard.vue 中通过 props 显示课程数据。
5. 当前题目页中再分别 import 这两个组件。

可先思考：
- 哪些是原始数据？courseList
- 哪些是状态数据？keyword
- 哪些是结果数据？filteredList`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.combo-shell { display: grid; gap: 12px; }
.combo-shell input { padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
.combo-list { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
.combo-card { padding: 16px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fff; }
.combo-card h4, .combo-card p { margin: 0; }
.combo-card p { margin-top: 8px; }
</style>
