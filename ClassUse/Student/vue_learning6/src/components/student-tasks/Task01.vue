<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题只练默认插槽。子组件固定面板外壳，父组件负责填充中间正文。</p>
    </div>
    <div class="panel-demo">
      <h3>课程提醒</h3>
      <p>今晚 19:00 开始 Vue 动态组件答疑，请提前准备好练习代码。</p>
    </div>
    <TaskScaffold summary="在 src/components/student-build/PanelBox.vue 中编写面板组件，内部保留默认插槽；当前题目页导入后，把正文通过插槽放进去。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/PanelBox.vue 新建组件。
2. 组件里保留固定标题和边框，再写 <slot /> 作为内容入口。
3. 当前题目页导入路径：@/components/student-build/PanelBox.vue。
4. 模板里写 <PanelBox>...</PanelBox>，把正文放在标签中间。

可先思考：
- 子组件负责什么？结构和样式
- 父组件负责什么？插槽内容`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.panel-demo { padding: 22px; border: 1px solid #bae6fd; border-radius: 20px; background: linear-gradient(135deg, #f0f9ff, #ecfeff); }
.panel-demo h3, .panel-demo p { margin: 0; }
.panel-demo p { margin-top: 10px; color: #0f172a; }
</style>
