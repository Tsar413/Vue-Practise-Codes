<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题把动态组件放进步骤条场景，用一个展示区轮流显示不同步骤内容。</p>
    </div>
    <div class="step-demo">
      <!-- TODO 学生练习区：导入三个步骤组件 -->
      <!-- TODO 学生练习区：完善步骤切换逻辑，也可以自行改成步骤条样式 -->
      <div class="steps">
        <button class="active">步骤 1</button>
        <button>步骤 2</button>
        <button>步骤 3</button>
      </div>
      <!-- TODO 学生练习区：把下面静态展示区改成步骤展示区 -->
      <section class="panel">
        <h4>当前步骤内容</h4>
        <p>例如先填写课程信息，再确认缓存设置，最后查看完成结果。</p>
      </section>
    </div>
    <TaskScaffold summary="在 src/components/student-build/ 中创建三个步骤组件；父组件负责统一切换展示。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[12]!
const todoText = `已学知识点提示：
1. 创建多个步骤组件。
2. 父组件维护当前步骤索引或 currentComponent。
3. 点击步骤按钮时切换对应组件。
4. 让展示区能根据当前步骤切换内容。`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.step-demo { display: grid; gap: 14px; }
.steps { display: flex; gap: 10px; flex-wrap: wrap; }
.steps button { padding: 10px 16px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; }
.steps button.active { background: #dbeafe; }
.panel { padding: 18px; border: 1px dashed #93c5fd; border-radius: 18px; background: #f8fbff; }
.panel h4, .panel p { margin: 0; }
.panel p { margin-top: 8px; color: #64748b; }
</style>
