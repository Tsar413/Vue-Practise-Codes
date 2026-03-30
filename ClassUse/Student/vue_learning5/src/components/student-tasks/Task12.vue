<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>父组件保存通知列表，子组件展示通知，点击某条通知按钮后回传给父组件更新状态。</p>
    </div>
    <div class="notice-list">
      <article class="notice-card unread">
        <div>
          <h4>作业提交通知</h4>
          <p>教务处 · 今天 15:20</p>
        </div>
        <button>标记已读</button>
      </article>
      <article class="notice-card">
        <div>
          <h4>课堂小测提醒</h4>
          <p>任课老师 · 今天 09:10</p>
        </div>
        <button disabled>已读</button>
      </article>
    </div>
    <TaskScaffold summary="父组件维护 noticeList；学生自己在 src/components/student-build/NoticeItem.vue 创建子组件，通过 props + emit 完成通知中心。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[11]!
const todoText = `已学知识点提示：
1. 父组件维护通知数组 noticeList。
2. 在 src/components/student-build/NoticeItem.vue 中定义单条通知组件。
3. 使用 v-for 渲染多个 NoticeItem。
4. NoticeItem 通过 props 接收 id、title、sender、time、isRead。
5. 子组件点击按钮时 emit('mark-read', id)。
6. 父组件接收事件后修改对应通知状态。

可先思考：
- 数据放在哪？父组件
- 哪个组件负责发出操作？NoticeItem`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.notice-list { display: grid; gap: 12px; }
.notice-card { display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center; padding: 18px; border: 1px solid #e5e7eb; border-radius: 18px; background: #fff; }
.notice-card.unread { border-color: #fdba74; background: #fff7ed; }
.notice-card h4, .notice-card p { margin: 0; }
.notice-card p { margin-top: 8px; color: #64748b; }
.notice-card button { padding: 10px 14px; border: none; border-radius: 12px; background: #b45309; color: #fff; }
.notice-card button:disabled { background: #94a3b8; }
@media (max-width: 720px) {
  .notice-card { grid-template-columns: 1fr; }
}
</style>
