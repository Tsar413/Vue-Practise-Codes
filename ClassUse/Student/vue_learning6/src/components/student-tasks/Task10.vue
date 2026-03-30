<template>
  <TaskPanel v-bind="meta">
    <div class="workspace"><p>这一题是 Day06 总结题。先搭外层插槽布局，再做中间动态切换、缓存和日志区域。</p></div>
    <div class="lab-demo">
      <!-- TODO 学生练习区：导入布局组件和两个实验面板组件 -->
      <!-- TODO 学生练习区：先完成外层布局，再补中间切换与日志区 -->
      <header class="hero">学习实验室头部插槽区</header>
      <div class="lab-body">
        <aside>
          <!-- TODO 学生练习区：侧边栏区域补充切换逻辑 -->
          左侧导航
        </aside>
        <section>
          <div class="switch-line">
            <button class="active">实验 A</button>
            <button>实验 B</button>
          </div>
          <div class="canvas">
            <!-- TODO 学生练习区：中间内容区改成可切换的实验展示区 -->
            中间内容区使用动态组件 + KeepAlive
          </div>
        </section>
      </div>
      <footer class="log-area">
        <!-- TODO 学生练习区：底部区域改成生命周期日志区 -->
        底部日志区观察生命周期变化
      </footer>
    </div>
    <TaskScaffold summary="建议拆成外层布局组件、两个实验面板组件和日志区。实现顺序严格按“先结构、再切换、再缓存、再日志”推进。" :code-hint="todoText" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[9]!
const todoText = `已学知识点提示：
1. 先做外层布局组件，例如 LabLayout.vue，并给出 header、sidebar、footer 等插槽。
2. 再做实验面板组件，并用动态组件切换。
3. 让切换区在切换后仍能保留状态。
4. 最后通过 onMounted、onUpdated、onActivated 等钩子记录日志。

可先思考：
- 综合题最容易乱在哪里？一开始就把所有逻辑混在一起
- 教案推荐顺序是什么？先结构、再切换、再缓存、再日志`
</script>
<style scoped>
.workspace{margin-bottom:12px;line-height:1.9;color:#475569}.workspace p{margin:0}.lab-demo{display:grid;gap:12px}.hero,.log-area{padding:14px 18px;border-radius:16px;background:#e0f2fe;color:#0c4a6e;font-weight:700}.lab-body{display:grid;grid-template-columns:180px minmax(0,1fr);gap:12px}.lab-body aside,.lab-body section{padding:16px;border:1px solid #dbeafe;border-radius:16px;background:#fff}.switch-line{display:flex;gap:10px;margin-bottom:12px}.switch-line button{padding:10px 14px;border:1px solid #bfdbfe;border-radius:999px;background:#fff;color:#1d4ed8}.switch-line button.active{background:#dbeafe}.canvas{padding:20px;border:1px dashed #93c5fd;border-radius:16px;color:#64748b}@media (max-width:720px){.lab-body{grid-template-columns:1fr}}
</style>
