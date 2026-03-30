<template>
  <TaskPanel v-bind="meta">
    <CourseTable v-slot="{ row }">
      <div class="table-row">
        <span>{{ row.title }}</span>
        <span>{{ row.level }}</span>
        <button>查看 {{ row.teacher }}</button>
      </div>
    </CourseTable>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseTable from './day06-components/CourseTable.vue'
const meta = taskMetaList[11]!
</script>

<style scoped>
.table-row { display: grid; grid-template-columns: 1.6fr 1fr auto; gap: 12px; align-items: center; padding: 14px 16px; border-top: 1px solid #e2e8f0; }
.table-row button { padding: 8px 12px; border: 0; border-radius: 10px; background: #2563eb; color: #fff; }
</style>
