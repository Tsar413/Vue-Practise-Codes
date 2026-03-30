<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题只练事件回传。子组件内部有输入框，真正处理搜索结果的是父组件。</p></div>
    <div class="emit-demo"><input type="text" placeholder="请输入课程关键词" /><button>搜索</button></div>
    <p class="tip">点击按钮后，需要把 keyword 告诉父组件。</p>
    <TaskScaffold summary="先在 src/components/student-build/SearchBar.vue 创建组件，再用 defineEmits 定义 search 事件回传关键词。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[6]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/SearchBar.vue 中定义 keyword。
2. 在 SearchBar 组件中使用 defineEmits(['search'])。
3. 点击按钮时 emit('search', keyword)。
4. 当前题目页导入路径：@/components/student-build/SearchBar.vue。
5. 父组件通过 @search 接收关键词。

可先思考：
- 子组件改父组件数据吗？不直接改
- 子组件做什么？发出事件通知`
</script>
<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p, .tip { margin: 0; }
.emit-demo { display: grid; grid-template-columns: 1fr auto; gap: 12px; margin-top: 12px; }
.emit-demo input { padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
.emit-demo button { padding: 10px 16px; border: none; border-radius: 12px; background: #b45309; color: #fff; cursor: pointer; }
.tip { margin-top: 12px; color: #64748b; }
@media (max-width: 720px) {
  .emit-demo { grid-template-columns: 1fr; }
}
</style>
