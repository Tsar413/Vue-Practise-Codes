<template>
  <section class="task-page">
    <header class="page-head">
      <h2>第二题答案：校园图书信息卡</h2>
      <p>单页面组件通信练习：左侧子组件把当前图书传给父组件，父组件再把 currentBook 传给右侧子组件。</p>
    </header>

    <div class="library-layout">
      <LibraryListPanel
        :books="bookList"
        :current-book="currentBook"
        @select="handleSelect"
      />

      <LibraryDetailPanel :current-book="currentBook" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LibraryDetailPanel from './library-components/LibraryDetailPanel.vue'
import LibraryListPanel from './library-components/LibraryListPanel.vue'

type Book = {
  id: number
  title: string
  author: string
  category: string
  stock: number
  intro: string
  location: string
}

const bookList = ref<Book[]>([
  { id: 1, title: 'Vue 3 组件化开发', author: '李老师', category: '前端开发', stock: 12, intro: '从组件拆分、状态组织到项目实践，适合课程实训使用。', location: 'A-203' },
  { id: 2, title: 'JavaScript 进阶实践', author: '王老师', category: '编程语言', stock: 2, intro: '围绕语法进阶和业务场景组织案例，适合项目训练前复习。', location: 'B-108' },
  { id: 3, title: '数据结构课堂笔记', author: '周老师', category: '计算机基础', stock: 0, intro: '整理常见数据结构与算法入门题型，适合考试周集中回顾。', location: 'C-305' },
])

const currentBook = ref<Book | null>(bookList.value[0]!)

function handleSelect(item: Book) {
  currentBook.value = item
}
</script>

<style scoped>
.task-page { display: grid; gap: 18px; }
.page-head h2, .page-head p { margin: 0; }
.page-head p { margin-top: 8px; color: #64748b; }
.library-layout { display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 14px; }
@media (max-width: 860px) {
  .library-layout { grid-template-columns: 1fr; }
}
</style>
