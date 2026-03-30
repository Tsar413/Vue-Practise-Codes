<template>
  <TaskPanel v-bind="meta">
    <NoticePanel />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import NoticePanel from './day05-components/NoticePanel.vue'
const meta = taskMetaList[2]!
</script>
