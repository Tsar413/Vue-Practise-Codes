<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>图书信息卡现在只保留最基础的组件通信：父组件保存当前图书，左侧子组件负责把点击项传回父组件，右侧子组件接收当前图书并渲染。</p>
    </div>
    <div class="library-layout">
      <LibraryListPanel />
      <LibraryDetailPanel />
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import LibraryDetailPanel from '@/components/student-build/LibraryDetailPanel.vue'
import LibraryListPanel from '@/components/student-build/LibraryListPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!

// 步骤 1：先保留图书原始数组，字段至少包含 id、title、author、category、stock、intro、location。
const bookList = [
  {
    id: 1,
    title: 'Vue 3 组件化开发',
    author: '李老师',
    category: '前端开发',
    stock: 12,
    intro: '从组件拆分、状态组织到项目实践，适合课程实训使用。',
    location: 'A-203',
  },
  {
    id: 2,
    title: 'JavaScript 进阶实践',
    author: '王老师',
    category: '编程语言',
    stock: 2,
    intro: '围绕语法进阶和业务场景组织案例，适合项目训练前复习。',
    location: 'B-108',
  },
  {
    id: 3,
    title: '数据结构课堂笔记',
    author: '周老师',
    category: '计算机基础',
    stock: 0,
    intro: '整理常见数据结构与算法入门题型，适合考试周集中回顾。',
    location: 'C-305',
  },
] as const

// 步骤 2：在父组件中定义 currentBook，表示当前选中的图书。
const currentBook = bookList[0]

// 步骤 3：把 bookList 通过 props 传给左侧列表子组件。
// 步骤 4：左侧子组件点击某一本书时，用 emit('select', item) 把当前图书传回父组件。
// 步骤 5：父组件拿到当前图书后，再通过 props 把 currentBook 传给右侧详情子组件。

void bookList
void currentBook
</script>

<style scoped>
.workspace { margin-bottom: 18px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.library-layout { display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 14px; }
@media (max-width: 860px) {
  .library-layout { grid-template-columns: 1fr; }
}
</style>
