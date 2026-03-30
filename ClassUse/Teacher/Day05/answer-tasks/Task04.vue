<template>
  <TaskPanel v-bind="meta">
    <div class="course-grid">
      <CourseCard v-for="item in courseList" :key="item.title" :title="item.title" :teacher="item.teacher" :tag="item.tag" />
    </div>
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseCard from './day05-components/CourseCard.vue'
const meta = taskMetaList[3]!
const courseList = [
  { title: 'Vue 组件开发', teacher: '李老师', tag: '基础' },
  { title: 'Emit 事件练习', teacher: '陈老师', tag: '通信' },
]
</script>
<style scoped>
.course-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
</style>
