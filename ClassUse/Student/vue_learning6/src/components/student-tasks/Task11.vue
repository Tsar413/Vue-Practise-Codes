<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题继续练具名插槽，把标题、正文和按钮区拆成独立入口。</p>
    </div>
    <div class="dialog-demo">
      <header>删除提示</header>
      <section>确认删除当前学习记录吗？</section>
      <footer>
        <button>取消</button>
        <button class="danger">确认</button>
      </footer>
    </div>
    <TaskScaffold summary="在 src/components/student-build/DialogBox.vue 中定义 title、default、actions 三个插槽区域；父组件分别传入标题、正文和按钮。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[10]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/DialogBox.vue 中定义多个插槽。
2. 例如：<slot name="title" />、<slot />、<slot name="actions" />。
3. 父组件通过不同 template 片段传入标题、正文和按钮。
4. 这一题重点是区域拆分，不必急着加复杂交互。`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.dialog-demo { overflow: hidden; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.dialog-demo header, .dialog-demo footer { padding: 14px 18px; background: #f8fafc; }
.dialog-demo section { padding: 18px; color: #475569; }
.dialog-demo footer { display: flex; justify-content: flex-end; gap: 10px; }
.dialog-demo button { padding: 10px 14px; border: 0; border-radius: 12px; background: #cbd5e1; color: #0f172a; }
.dialog-demo .danger { background: #ef4444; color: #fff; }
</style>
