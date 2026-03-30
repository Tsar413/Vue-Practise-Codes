<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>联系人项目和 Day08 的热搜榜很像，但这里更适合训练“左侧列表 + 右侧详情”都依赖同一个当前联系人状态。</p>
    </div>
    <div class="contact-layout">
      <ContactListPanel />
      <ContactDetailPanel />
    </div>
    <TaskScaffold summary="左侧联系人列表和右侧详情区已经拆成两个组件。下一步由学生在父组件里真正接好 props、emit 和 currentContact。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import ContactDetailPanel from '@/components/student-build/ContactDetailPanel.vue'
import ContactListPanel from '@/components/student-build/ContactListPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const contactList = [
  {
    id: 1,
    name: '林小满',
    desc: '摄影社 / 在线',
    lastMessage: '刚发来一条新消息',
    messages: ['今天社团活动记得来哦。', '收到，晚上见。'],
  },
  {
    id: 2,
    name: '周一舟',
    desc: '班长 / 忙碌中',
    lastMessage: '晚上一起去图书馆吗？',
    messages: ['今天晚自习要不要一起复习？'],
  },
] as const

const currentContact = contactList[0]

const todoText = `已学知识点提示：
1. ContactListPanel.vue 和 ContactDetailPanel.vue 已经帮你建好，先不要把左右两块重新写回父组件。
2. 父组件里已经准备了 contactList 和 currentContact，下一步是把它们真正和子组件接起来。
3. 左侧列表组件通过 props 接收数组，点击联系人时 emit('select', item)。
4. 右侧详情组件通过 props 接收 currentContact。

可先思考：
- 为什么 currentContact 更适合放父组件？
- 左右两块分别负责什么？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.contact-layout { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 14px; }
@media (max-width: 860px) {
  .contact-layout { grid-template-columns: 1fr; }
}
</style>
