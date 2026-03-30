<template>
  <TaskPanel v-bind="meta">
    <div class="list">
      <NoticeItem
        v-for="item in noticeList"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :sender="item.sender"
        :time="item.time"
        :is-read="item.isRead"
        @mark-read="handleMarkRead"
      />
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import NoticeItem from './day05-components/NoticeItem.vue'

const meta = taskMetaList[11]!
const noticeList = ref([
  { id: 1, title: '作业提交通知', sender: '教务处', time: '今天 15:20', isRead: false },
  { id: 2, title: '课堂小测提醒', sender: '任课老师', time: '今天 09:10', isRead: true },
])

function handleMarkRead(id: number) {
  const target = noticeList.value.find((item) => item.id === id)
  if (target) target.isRead = true
}
</script>

<style scoped>
.list { display: grid; gap: 12px; }
</style>
