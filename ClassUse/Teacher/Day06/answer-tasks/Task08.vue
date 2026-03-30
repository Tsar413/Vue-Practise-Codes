<template>
  <TaskPanel v-bind="meta">
    <CourseSlotCard>
      <template #header>
        <h3>Vue 组件进阶课</h3>
      </template>
      <p>课程介绍由默认插槽承载，可以是多段说明、标签组合或简介内容。</p>
      <template #footer>
        <button>查看详情</button>
        <button>立即加入</button>
      </template>
    </CourseSlotCard>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseSlotCard from './day06-components/CourseSlotCard.vue'
const meta = taskMetaList[7]!
</script>
