<template>
  <TaskPanel v-bind="meta">
    <input v-model="keyword" type="text" placeholder="搜索课程" />
    <ul class="list">
      <li v-for="course in filteredCourses" :key="course">{{ course }}</li>
    </ul>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[6]!
const keyword = ref('')
const courseList = ref(['Vue 基础', '计算属性训练', '表单交互实战', '项目综合练习'])
const filteredCourses = computed(() =>
  courseList.value.filter((course) => course.includes(keyword.value.trim())),
)
</script>

<style scoped>
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.list { margin: 14px 0 0; padding-left: 20px; line-height: 2; }
</style>
