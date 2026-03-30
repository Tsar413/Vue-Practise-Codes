<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题把“动态切换 + 缓存状态”放进一个工作台场景里，草稿内容必须在切换后保留。</p></div>
    <div class="dashboard-demo">
      <!-- TODO 学生练习区：导入两个工作台面板组件 -->
      <!-- TODO 学生练习区：左侧只负责切换，不直接写内容区 -->
      <aside class="nav">
        <button class="active">统计面板</button>
        <button>草稿面板</button>
      </aside>
      <section class="board">
        <!-- TODO 学生练习区：把这里改成可缓存的展示区 -->
        <h4>草稿面板</h4>
        <textarea rows="4" placeholder="切回统计面板后，再回来这里内容仍应保留"></textarea>
      </section>
    </div>
    <TaskScaffold summary="创建两个工作台面板组件；父组件负责切换和缓存展示区。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[8]!
const todoText = `已学知识点提示：
1. 在 src/components/student-build/ 中准备 StatsPanel.vue 和 DraftPanel.vue。
2. 父组件通过按钮切换 currentComponent。
3. 让展示区具备缓存效果。
4. 草稿面板中放输入框或 textarea，方便验证缓存效果。

可先思考：
- 谁负责切换？动态组件
- 谁负责保留输入状态？KeepAlive`
</script>
<style scoped>
.workspace{margin-bottom:12px;line-height:1.9;color:#475569}.workspace p{margin:0}.dashboard-demo{display:grid;grid-template-columns:180px minmax(0,1fr);gap:14px}.nav{display:grid;gap:10px}.nav button{padding:12px 14px;border:1px solid #cbd5e1;border-radius:14px;background:#fff;text-align:left}.nav button.active{border-color:#0ea5e9;background:#ecfeff}.board{padding:18px;border:1px solid #bae6fd;border-radius:18px;background:#fff}.board h4,.board textarea{margin:0}.board textarea{width:100%;margin-top:12px;padding:14px;border:1px solid #cbd5e1;border-radius:14px;font:inherit;resize:vertical}@media (max-width:720px){.dashboard-demo{grid-template-columns:1fr}}
</style>
