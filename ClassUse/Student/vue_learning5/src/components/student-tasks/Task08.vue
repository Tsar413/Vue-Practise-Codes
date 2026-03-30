<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>点赞按钮做成子组件，父组件负责 count++。</p></div>
    <div class="like-demo"><span>当前点赞数：8</span><button>点赞 +1</button></div>
    <TaskScaffold summary="先在 src/components/student-build/LikeButton.vue 创建组件，子组件点击后 emit('like')，父组件监听后修改点赞数。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[7]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/LikeButton.vue 中写按钮。
2. 子组件点击时 emit('like')。
3. 当前题目页导入路径：@/components/student-build/LikeButton.vue。
4. 父组件通过 @like 监听。
5. 在父组件中执行 count++。`
</script>
<style scoped>
.workspace{margin-bottom:12px;line-height:1.9;color:#475569}.workspace p{margin:0}.like-demo{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:16px;border-radius:16px;background:#fff7ed}.like-demo button{padding:10px 16px;border:none;border-radius:12px;background:#b45309;color:#fff}
</style>
