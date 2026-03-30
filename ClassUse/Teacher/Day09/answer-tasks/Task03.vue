<template>
  <TaskPanel v-bind="meta">
    <div class="contact-layout">
      <ContactListPanel
        :contact-list="contactList"
        :current-contact="currentContact"
        @select="handleSelect"
      />
      <ContactDetailPanel :current-contact="currentContact" />
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import ContactDetailPanel from './day09-components/ContactDetailPanel.vue'
import ContactListPanel from './day09-components/ContactListPanel.vue'

type Contact = {
  id: number
  name: string
  desc: string
  lastMessage: string
  messages: string[]
}

const meta = taskMetaList[2]!
const contactList: Contact[] = [
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
]

const currentContact = ref<Contact>(contactList[0]!)

function handleSelect(item: Contact) {
  currentContact.value = item
}
</script>

<style scoped>
.contact-layout { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 14px; }
@media (max-width: 860px) {
  .contact-layout { grid-template-columns: 1fr; }
}
</style>
