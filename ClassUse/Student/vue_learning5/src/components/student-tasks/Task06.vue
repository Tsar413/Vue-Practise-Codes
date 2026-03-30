<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>父组件准备多个字段，子组件通过多个 props 接收并展示课程信息。</p>
    </div>
    <div class="card-demo">
      <h4>Vue 组件通信</h4>
      <p>讲师：李老师</p>
      <p>课时：16</p>
    </div>
    <TaskScaffold summary="先在 src/components/student-build/CourseInfo.vue 定义组件，再通过 props 接收 title、teacher、lessons 并显示。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[5]!
const todoText = `已学知识点提示：
1. 父组件中准备好课程信息。
2. 在 src/components/student-build/CourseInfo.vue 中使用 defineProps 接收字段。
3. 当前题目页导入路径：@/components/student-build/CourseInfo.vue。
4. 父组件通过 :title :teacher :lessons 传递数据。
5. 子组件只负责展示，不直接修改父组件数据。

可先思考：
- 一个子组件能接收几个 props？可以多个
- 数据应该放在哪？父组件`
</script>
<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.card-demo { padding: 18px; border: 1px solid #fed7aa; border-radius: 18px; background: #fff7ed; }
.card-demo h4, .card-demo p { margin: 0; }
.card-demo p { margin-top: 8px; }
</style>
