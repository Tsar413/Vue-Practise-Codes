<template>
  <TaskPanel v-bind="meta">
    <CourseInfo :title="title" :teacher="teacher" :lessons="lessons" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseInfo from './day05-components/CourseInfo.vue'
const meta = taskMetaList[5]!
const title = 'Vue 组件通信'
const teacher = '李老师'
const lessons = 16
</script>
