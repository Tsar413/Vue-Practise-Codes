<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题是 Day06 最关键的插槽进阶题。子组件负责循环课程数据，父组件决定每项长什么样。</p>
    </div>
    <div class="list-demo">
      <article>
        <span>1</span>
        <div>
          <h4>Vue 组件设计</h4>
          <p>父组件可以改这里的排版</p>
        </div>
      </article>
      <article>
        <span>2</span>
        <div>
          <h4>KeepAlive 实战</h4>
          <p>子组件只负责把 course 暴露出来</p>
        </div>
      </article>
    </div>
    <TaskScaffold summary="在 src/components/student-build/CourseListBox.vue 中维护课程数组并循环，循环内部通过作用域插槽把 course 和 index 暴露给父组件。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/CourseListBox.vue 新建组件。
2. 子组件内部维护 courseList，并负责 v-for。
3. 在循环中写 <slot name="item" :course="course" :index="index" />。
4. 父组件通过 <template #item="{ course, index }"> 自定义每条结构。

可先思考：
- 哪些数据由子组件掌握？course、index
- 谁决定最终长什么样？父组件`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.list-demo { display: grid; gap: 12px; }
.list-demo article { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 12px; padding: 16px; border: 1px solid #dbeafe; border-radius: 18px; background: #f8fbff; }
.list-demo span { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; background: #2563eb; color: #fff; font-weight: 700; }
.list-demo h4, .list-demo p { margin: 0; }
.list-demo p { margin-top: 6px; color: #64748b; }
</style>
