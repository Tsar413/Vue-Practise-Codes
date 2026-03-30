<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题专门观察缓存效果。切换走不等于销毁，KeepAlive 会把组件状态保留下来。</p>
    </div>
    <div class="keep-demo">
      <!-- TODO 学生练习区：导入两个表单组件 -->
      <!-- TODO 学生练习区：完善切换逻辑，并观察缓存前后的差异 -->
      <div class="switcher">
        <button class="active">学习计划</button>
        <button>笔记草稿</button>
      </div>
      <!-- TODO 学生练习区：把这里改成缓存后的展示区 -->
      <textarea rows="4" placeholder="切走再切回，希望这里的内容仍然保留"></textarea>
    </div>
    <TaskScaffold summary="准备两个表单类组件；完成切换与缓存后，再观察输入值是否保留。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[4]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/ 中准备两个表单组件。
2. 父组件维护 currentComponent，并用动态组件切换。
3. 让切换区域具备缓存能力。
4. 分别在两个面板里输入内容，再来回切换观察。

可先思考：
- 不加 KeepAlive 会发生什么？
- 为什么缓存后输入内容还能在？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.keep-demo { display: grid; gap: 12px; }
.switcher { display: flex; gap: 10px; }
.switcher button { padding: 10px 14px; border: 1px solid #a7f3d0; border-radius: 999px; background: #fff; color: #047857; }
.switcher button.active { background: #d1fae5; }
.keep-demo textarea { width: 100%; padding: 14px; border: 1px solid #bbf7d0; border-radius: 16px; font: inherit; resize: vertical; }
</style>
