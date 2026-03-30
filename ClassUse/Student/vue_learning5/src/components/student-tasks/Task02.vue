<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题只练最基础的组件定义和使用，把学员信息封装成独立卡片。</p>
    </div>
    <div class="card-demo">
      <h4>张小雨</h4>
      <p>班级：2201</p>
      <p>方向：Vue 前端开发</p>
    </div>
    <TaskScaffold summary="在 src/components/student-build/StudentCard.vue 新建组件，在当前题目页导入后直接显示学员姓名、班级和方向。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/StudentCard.vue 新建组件。
2. 在组件模板里写学员姓名、班级和方向。
3. 当前题目页导入路径：@/components/student-build/StudentCard.vue。
4. 模板里直接写 <StudentCard />。

可先思考：
- 这一题需要 props 吗？不需要
- 核心目标是什么？会定义、导入、使用展示型组件`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.card-demo { padding: 18px; border: 1px solid #dbe4f0; border-radius: 18px; background: #fff; }
.card-demo h4, .card-demo p { margin: 0; }
.card-demo p { margin-top: 8px; }
</style>
