<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题把作用域插槽放进表格场景。数据在子组件，行结构交给父组件定制。</p>
    </div>
    <div class="table-demo">
      <div class="row head">
        <span>课程名</span>
        <span>难度</span>
        <span>操作</span>
      </div>
      <div class="row">
        <span>Vue 插槽</span>
        <span>中等</span>
        <button>查看</button>
      </div>
      <div class="row">
        <span>KeepAlive</span>
        <span>进阶</span>
        <button>查看</button>
      </div>
    </div>
    <TaskScaffold summary="在 src/components/student-build/CourseTable.vue 中维护 rows 数据，并通过作用域插槽把 row 暴露给父组件；父组件自定义每行显示。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[11]!
const todoText = `已学知识点提示：
1. 子组件内部准备表格数组 rows。
2. 循环每一行时写 <slot name="row" :row="row" :index="index" />。
3. 父组件通过 #row="{ row }" 决定单元格内容。
4. 这一题的关键是“子给 row，父写模板”。`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.table-demo { overflow: hidden; border: 1px solid #dbe4f0; border-radius: 18px; background: #fff; }
.row { display: grid; grid-template-columns: 1.6fr 1fr auto; gap: 12px; align-items: center; padding: 14px 16px; border-top: 1px solid #e2e8f0; }
.row.head { border-top: 0; background: #f8fafc; font-weight: 700; }
.row button { padding: 8px 12px; border: 0; border-radius: 10px; background: #2563eb; color: #fff; }
</style>
