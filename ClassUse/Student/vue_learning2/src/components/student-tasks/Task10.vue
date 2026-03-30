<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“报名管理器”。</p>
      <p>要求：根据输入项组合生成报名状态。</p>
    </div>
    <div class="form">
      <input type="text" placeholder="请输入姓名" />
      <select>
        <option value="">请选择课程</option>
        <option value="Vue 基础">Vue 基础</option>
        <option value="组件开发">组件开发</option>
        <option value="项目实战">项目实战</option>
      </select>
      <label class="agree">
        <input type="checkbox" />
        我已阅读报名须知
      </label>
    </div>
    <p class="state"><!-- TODO: 显示 statusText --></p>
    <TaskScaffold summary="补全多个 v-model 和统一状态计算。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[9]!
const todoText = `// TODO: 定义 studentName
// TODO: 定义 selectedCourse
// TODO: 定义 agree
// TODO: 定义 statusText
// TODO: 给三个输入项补 v-model`

// TODO: 定义 studentName
// TODO: 定义 selectedCourse
// TODO: 定义 agree
// TODO: 定义 statusText
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .state { margin: 0 0 10px; }
.form { display: grid; gap: 12px; }
input, select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.agree { display: flex; gap: 10px; align-items: center; color: #334155; }
.agree input { width: auto; }
.state { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
</style>
