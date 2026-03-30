<template>
  <TaskPanel v-bind="meta">
    <StudentCard />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import StudentCard from './day05-components/StudentCard.vue'
const meta = taskMetaList[1]!
</script>
