<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题开始进入父传子。消息内容由父组件决定，消息框组件只负责展示。</p>
    </div>
    <div class="message-demo">
      <p>本周五晚自习改为 Vue 组件通信答疑课，请提前准备练习代码。</p>
    </div>
    <TaskScaffold summary="先在 src/components/student-build/MessageBox.vue 创建组件，父组件定义 message，再通过 props 传给它显示。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[4]!
const todoText = `已学知识点提示：
1. 父组件中先定义提示内容 message。
2. 在 src/components/student-build/MessageBox.vue 中通过 defineProps 接收 message。
3. 当前题目页导入路径：@/components/student-build/MessageBox.vue。
4. 父组件使用 :message="message" 传值。
5. 子组件模板中只负责输出 message。

可先思考：
- 数据放在哪？父组件
- 子组件做什么？接收并展示`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.message-demo { padding: 16px; border-left: 4px solid #f59e0b; background: #fff7ed; color: #9a3412; border-radius: 12px; }
.message-demo p { margin: 0; line-height: 1.8; }
</style>
