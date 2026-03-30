<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“课程分类切换”。</p>
      <p>要求：点击按钮后切换当前分类，并让当前按钮高亮。</p>
    </div>
    <div class="todo-block">
      <div class="tabs">
        <!-- TODO: 使用 v-for 渲染分类按钮 -->
      </div>
      <p class="title">当前分类：<!-- TODO --></p>
    </div>
    <TaskScaffold
      summary="补全 script 和 template。"
      :code-hint="todoText"
    />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[18]!
const todoText = `// TODO: 定义 categories 和 currentCategory
// TODO: 在模板中使用 v-for
// TODO: 给按钮补 @click 和 :class
// TODO: 在文本中补 {{ currentCategory }}`

// TODO: 定义 categories
// TODO: 定义 currentCategory
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
.tabs { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 14px; }
.title { margin: 0; font-size: 20px; font-weight: 700; }
</style>
