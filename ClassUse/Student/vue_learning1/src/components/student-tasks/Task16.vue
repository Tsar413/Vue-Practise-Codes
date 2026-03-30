<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“按钮文字切换”。</p>
      <p>要求：按钮文本在“开始学习”和“继续学习”之间切换。</p>
    </div>
    <div class="todo-block">
      <button><!-- TODO: 显示 buttonText --><!-- TODO: 给按钮补 @click --></button>
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

const meta = taskMetaList[15]!
const todoText = `// TODO: 定义 buttonText
// TODO: 在模板中补 {{ buttonText }}
// TODO: 给按钮补点击事件`

// TODO: 定义 buttonText
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.todo-block { margin-top: 14px; }
button { padding: 10px 18px; border: none; border-radius: 12px; background: #1d4ed8; color: #fff; cursor: pointer; }
</style>
