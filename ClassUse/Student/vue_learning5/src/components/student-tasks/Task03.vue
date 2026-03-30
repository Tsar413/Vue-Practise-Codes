<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题只练组件注册与导入使用。通知面板已经写好，任务是把它真正挂到页面里。</p>
    </div>
    <div class="notice-demo">
      <h4>系统通知</h4>
      <p>今天 16:00 进行 Vue 课堂小测。</p>
    </div>
    <TaskScaffold summary="先在 src/components/student-build/NoticePanel.vue 创建组件，再导入到当前题目页显示，重点理解“定义”和“使用”是两个步骤。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/NoticePanel.vue 创建 NoticePanel 组件。
2. 在当前题目页中先导入 NoticePanel。
3. 当前题目页导入路径：@/components/student-build/NoticePanel.vue。
4. 模板里补上 <NoticePanel />。
5. 先只练组件注册和使用，不加入 props 与事件。

可先思考：
- 为什么组件写好了还看不到？因为还没有在父页面中使用
- 这一题的核心是什么？导入、注册、显示`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.notice-demo { padding: 18px; border-radius: 18px; background: #fff7ed; border: 1px solid #fdba74; }
.notice-demo h4, .notice-demo p { margin: 0; }
.notice-demo p { margin-top: 8px; }
</style>
