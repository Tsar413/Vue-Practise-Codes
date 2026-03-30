<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题开始切换思维：不是多个区域同时显示，而是同一个位置轮流显示不同组件。</p>
    </div>
    <div class="tabs-demo">
      <!-- TODO 学生练习区：导入两个展示组件 -->
      <!-- TODO 学生练习区：完善按钮切换逻辑 -->
      <div class="tabs">
        <button class="active">课程信息</button>
        <button>学习记录</button>
      </div>
      <!-- TODO 学生练习区：把这里改成动态展示区 -->
      <section class="panel">
        <h4>当前展示区</h4>
        <p>点击不同按钮，在这一块区域切换不同组件。</p>
      </section>
    </div>
    <TaskScaffold summary='在 src/components/student-build/ 中创建两个面板组件；父组件负责完成切换逻辑与展示区替换。' :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[3]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/ 中新建两个展示组件。
2. 父组件维护 currentComponent。
3. 点击按钮时把 currentComponent 切到目标组件。
4. 让预览区能够随当前状态切换不同组件。

可先思考：
- 动态组件和 v-if/v-else 的区别是什么？
- 为什么这里说“同一个位置轮流显示”？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.tabs-demo { display: grid; gap: 14px; }
.tabs { display: flex; gap: 10px; }
.tabs button { padding: 10px 16px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; }
.tabs button.active { background: #dbeafe; }
.panel { padding: 18px; border: 1px dashed #93c5fd; border-radius: 18px; background: #f8fbff; }
.panel h4, .panel p { margin: 0; }
.panel p { margin-top: 8px; color: #64748b; }
</style>
