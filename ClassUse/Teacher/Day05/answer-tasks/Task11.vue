<template>
  <TaskPanel v-bind="meta">
    <div class="panel">
      <SearchBar @search="handleSearch" />
      <div class="list">
        <CourseCard
          v-for="item in filteredList"
          :key="item.id"
          :title="item.title"
          :teacher="item.teacher"
          :tag="item.tag"
        />
      </div>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CourseCard from './day05-components/CourseCard.vue'
import SearchBar from './day05-components/SearchBar.vue'

const meta = taskMetaList[10]!
const keyword = ref('')
const courseList = [
  { id: 1, title: 'Vue 组件开发', teacher: '李老师', tag: '基础' },
  { id: 2, title: 'Emit 事件练习', teacher: '陈老师', tag: '通信' },
  { id: 3, title: 'Provide Inject 入门', teacher: '周老师', tag: '进阶' },
]

function handleSearch(value: string) {
  keyword.value = value
}

const filteredList = computed(() =>
  courseList.filter(
    (item) =>
      item.title.includes(keyword.value) ||
      item.teacher.includes(keyword.value) ||
      item.tag.includes(keyword.value),
  ),
)
</script>

<style scoped>
.panel { display: grid; gap: 14px; }
.list { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; }
</style>
