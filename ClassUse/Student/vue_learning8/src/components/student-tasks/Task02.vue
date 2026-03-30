<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>热搜榜项目是 Day08 最关键的组件协作案例。关键不是样式，而是先想清楚“当前页面”和“当前选中项”为什么应该放在父组件。</p>
    </div>
    <div class="hot-layout">
      <HotListPage />
      <HotDetailPage />
    </div>
    <TaskScaffold summary="先把热搜数组、currentPage 和 currentItem 放在父组件，再拆成列表页和详情页两个子组件。页面切换由父组件决定，子组件只负责展示和反馈。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import HotDetailPage from '@/components/student-build/HotDetailPage.vue'
import HotListPage from '@/components/student-build/HotListPage.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const hotList = [
  {
    id: 1,
    title: '春季校园歌会报名开启',
    hot: 9281,
    summary: '本周五晚上在操场举行，现已开放班级报名和志愿者招募。',
  },
  {
    id: 2,
    title: '图书馆延长开放时间',
    hot: 7015,
    summary: '考试周期间图书馆将延长到晚上 11 点，并增加自习区座位。',
  },
  {
    id: 3,
    title: '社团文化节节目单公布',
    hot: 6452,
    summary: '多个社团将集中展示节目，现场还会开放互动体验区。',
  },
] as const

const currentPage = 'list'
const currentItem = hotList[0]

const todoText = `已学知识点提示：
1. HotListPage.vue 和 HotDetailPage.vue 已经帮你建好，先不要再把结构写回父组件里。
2. 父组件里已经准备了 hotList、currentPage 和 currentItem，下一步是把这些状态真正和子组件接起来。
3. 列表页适合接收数组并通过 props 渲染；点击某项后，通过 emit('select', item) 通知父组件。
4. 详情页接收当前项并展示详情；点击返回时，通过 emit('back') 让父组件切回列表页。

可先思考：
- 哪些状态应该放在父组件？
- 哪些组件只负责展示与事件反馈？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.hot-layout { display: grid; grid-template-columns: 1fr 0.95fr; gap: 14px; }
@media (max-width: 860px) {
  .hot-layout { grid-template-columns: 1fr; }
}
</style>
