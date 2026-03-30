<template>
  <TaskPanel v-bind="meta">
    <CourseCardLayout>
      <template #header>
        <h3>Vue 插槽课</h3>
      </template>
      <p>正文内容由默认插槽传入，适合放课程介绍、摘要或说明。</p>
      <template #footer>
        <button>开始学习</button>
      </template>
    </CourseCardLayout>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseCardLayout from './day06-components/CourseCardLayout.vue'
const meta = taskMetaList[1]!
</script>
