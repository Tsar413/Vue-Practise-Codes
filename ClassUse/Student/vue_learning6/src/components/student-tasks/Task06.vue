<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题要让日志真正跑起来。不是只写按钮，而是观察 mounted、updated、unmounted 的时机。</p>
    </div>
    <div class="logger-demo">
      <!-- TODO 学生练习区：导入生命周期观察组件 -->
      <!-- TODO 学生练习区：完善按钮行为 -->
      <div class="toolbar">
        <button>修改数据</button>
        <button>卸载组件</button>
      </div>
      <!-- TODO 学生练习区：这里接入生命周期观察组件 -->
      <!-- TODO 学生练习区：把静态日志改成真实日志列表 -->
      <ul>
        <li>mounted: 组件已挂载</li>
        <li>updated: 数据更新后重新渲染</li>
        <li>unmounted: 组件已卸载</li>
      </ul>
    </div>
    <TaskScaffold summary="当前题目页可以直接维护 logs 数组；再创建一个可挂载/卸载的小组件，在其内部通过 onMounted、onUpdated、onUnmounted 往日志中追加提示。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[5]!
const todoText = `已学知识点提示：
1. 在一个子组件内部引入 onMounted、onUpdated、onUnmounted。
2. 钩子触发时，通过 emit 或共享数组把日志追加到父组件。
3. 提供一个按钮改数据，观察 updated。
4. 提供一个按钮控制显示/隐藏，观察 unmounted。

可先思考：
- 挂载、更新、卸载分别发生在什么时候？
- 为什么日志能帮助理解组件过程？`
</script>
<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.logger-demo { padding: 18px; border: 1px solid #e2e8f0; border-radius: 18px; background: #fff; }
.toolbar { display: flex; gap: 10px; margin-bottom: 12px; }
.toolbar button { padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 12px; background: #f8fafc; }
.logger-demo ul { margin: 0; padding-left: 18px; color: #475569; }
.logger-demo li + li { margin-top: 8px; }
</style>
