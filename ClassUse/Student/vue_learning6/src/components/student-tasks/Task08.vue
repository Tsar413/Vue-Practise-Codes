<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题把默认插槽和具名插槽组合起来，做成一个更接近真实业务的课程卡片。</p></div>
    <div class="slot-card">
      <header>Vue 组件进阶课</header>
      <div class="body">
        课程介绍区域由默认插槽填充，这里可以放多段文字或标签。
      </div>
      <footer>
        <button>查看详情</button>
        <button>加入学习</button>
      </footer>
    </div>
    <TaskScaffold summary="在 src/components/student-build/CourseSlotCard.vue 中组合 header、默认插槽和 footer；父组件负责传标题、介绍和底部操作按钮。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[7]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/CourseSlotCard.vue 新建组件。
2. 标题区使用具名插槽 header。
3. 课程介绍区域使用默认插槽。
4. 底部按钮区使用具名插槽 footer。

可先思考：
- 为什么这题不是只用默认插槽？
- 哪些区域适合交给父组件完全定制？`
</script>
<style scoped>
.workspace{margin-bottom:12px;line-height:1.9;color:#475569}.workspace p{margin:0}.slot-card{overflow:hidden;border:1px solid #fcd34d;border-radius:20px;background:#fffef7}.slot-card header,.slot-card footer{padding:14px 18px;background:#fef3c7}.slot-card .body{padding:18px;color:#475569;line-height:1.8}.slot-card footer{display:flex;gap:10px}.slot-card button{padding:10px 14px;border:0;border-radius:12px;background:#f59e0b;color:#fff}
</style>
