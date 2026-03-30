<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题聚焦具名插槽。卡片头部、正文、底部都要能由父组件分别控制。</p>
    </div>
    <div class="layout-card">
      <header>课程卡片头部</header>
      <div class="content">这里是课程简介区域</div>
      <footer>底部按钮区域</footer>
    </div>
    <TaskScaffold summary="在 src/components/student-build/CourseCardLayout.vue 中定义 header、默认插槽和 footer；父组件分别传入三块内容。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/CourseCardLayout.vue 新建组件。
2. 组件中分别写 <slot name="header" />、<slot />、<slot name="footer" />。
3. 父组件通过 <template #header> 和 <template #footer> 传入内容。
4. 默认插槽区域放课程说明文字。

可先思考：
- 一个组件有几个可变区域？三个
- 默认插槽和具名插槽要怎么分工？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.layout-card { overflow: hidden; border: 1px solid #cbd5e1; border-radius: 20px; background: #fff; }
.layout-card header, .layout-card footer { padding: 14px 18px; background: #f8fafc; font-weight: 700; }
.layout-card .content { padding: 18px; color: #475569; }
</style>
