<template>
  <TaskPanel v-bind="meta">
    <CourseListBox v-slot="{ course, index }">
      <article class="item">
        <span>{{ index + 1 }}</span>
        <div>
          <h4>{{ course.title }}</h4>
          <p>讲师：{{ course.teacher }}</p>
        </div>
      </article>
    </CourseListBox>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseListBox from './day06-components/CourseListBox.vue'
const meta = taskMetaList[2]!
</script>

<style scoped>
.item { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 12px; padding: 16px; border: 1px solid #dbeafe; border-radius: 18px; background: #f8fbff; }
.item span { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; background: #2563eb; color: #fff; font-weight: 700; }
.item h4, .item p { margin: 0; }
.item p { margin-top: 6px; color: #64748b; }
</style>
