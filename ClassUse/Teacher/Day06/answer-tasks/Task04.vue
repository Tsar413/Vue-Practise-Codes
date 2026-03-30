<template>
  <TaskPanel v-bind="meta">
    <div class="wrap">
      <div class="tabs">
        <button :class="{ active: current === 'info' }" @click="current = 'info'">课程信息</button>
        <button :class="{ active: current === 'record' }" @click="current = 'record'">学习记录</button>
      </div>
      <component :is="currentComponent" />
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseInfoPane from './day06-components/CourseInfoPane.vue'
import StudyRecordPane from './day06-components/StudyRecordPane.vue'
const meta = taskMetaList[3]!
const current = ref<'info' | 'record'>('info')
const currentComponent = computed(() => (current.value === 'info' ? CourseInfoPane : StudyRecordPane))
</script>

<style scoped>
.wrap { display: grid; gap: 14px; }
.tabs { display: flex; gap: 10px; }
.tabs button { padding: 10px 16px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; }
.tabs button.active { background: #dbeafe; }
</style>
