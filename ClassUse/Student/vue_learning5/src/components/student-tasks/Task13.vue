<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>这一题把列表到详情的 params 传值和主题色的 provide/inject 组合起来，作为第五天总结题。</p>
    </div>
    <div class="detail-project">
      <aside class="course-menu">
        <button class="course-link active">课程 101 · Vue 组件开发</button>
        <button class="course-link">课程 205 · Emit 事件练习</button>
      </aside>
      <section class="detail-card">
        <div class="theme-badge">当前主题色：#f59e0b</div>
        <h4>Vue 组件开发</h4>
        <p>课程编号：101</p>
        <p>详情页需要同时拿到 params 和祖先提供的主题信息。</p>
      </section>
    </div>
    <TaskScaffold summary="学生自己在 src/components/student-build/ 中创建课程列表、详情展示或主题徽标相关组件；列表页传递 params，详情页再结合 provide/inject。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[12]!
const todoText = `已学知识点提示：
1. 列表页准备课程数组 courseList。
2. 点击某门课程时，带上 id 和 title 跳转到详情页。
3. 详情页中读取 params 并显示课程编号与名称。
4. 祖先组件通过 provide('themeColor', themeColor) 提供主题色。
5. 在 src/components/student-build/ThemeBadge.vue 或详情子组件中通过 inject('themeColor') 获取主题色并展示。
6. 当前题目页中按需 import 你自己创建的组件。

可先思考：
- params 解决什么问题？告诉详情页当前课程是谁
- provide/inject 解决什么问题？跨层共享公共主题数据`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.detail-project { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 16px; }
.course-menu { display: grid; gap: 10px; align-content: start; }
.course-link { padding: 14px 16px; border: 1px solid #fdba74; border-radius: 16px; background: #fff; color: #9a3412; text-align: left; }
.course-link.active { background: #fff7ed; }
.detail-card { padding: 20px; border: 1px solid #fde68a; border-radius: 20px; background: linear-gradient(180deg, #fff7ed 0%, #fff 100%); }
.theme-badge { display: inline-flex; padding: 8px 12px; border: 2px solid #f59e0b; border-radius: 999px; color: #9a3412; font-weight: 700; }
.detail-card h4, .detail-card p { margin: 12px 0 0; }
@media (max-width: 720px) {
  .detail-project { grid-template-columns: 1fr; }
}
</style>
