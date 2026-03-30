<template>
  <TaskPanel v-bind="meta">
    <div class="detail-project">
      <aside class="course-menu">
        <button
          v-for="item in courseList"
          :key="item.id"
          :class="['course-link', { active: item.id === currentParams.id }]"
          @click="goDetail(item)"
        >
          课程 {{ item.id }} · {{ item.title }}
        </button>
      </aside>
      <section class="detail-card">
        <ThemeBadge />
        <h4>{{ currentParams.title }}</h4>
        <p>课程编号：{{ currentParams.id }}</p>
        <p>详情页需要同时拿到 params 和祖先提供的主题信息。</p>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import ThemeBadge from './day05-components/ThemeBadge.vue'

const meta = taskMetaList[12]!
const courseList = [
  { id: '101', title: 'Vue 组件开发' },
  { id: '205', title: 'Emit 事件练习' },
]
const currentParams = ref({
  id: courseList[0].id,
  title: courseList[0].title,
})

provide('themeColor', '#f59e0b')

function goDetail(course: (typeof courseList)[number]) {
  currentParams.value = {
    id: course.id,
    title: course.title,
  }
}
</script>

<style scoped>
.detail-project { display: grid; grid-template-columns: 240px minmax(0, 1fr); gap: 16px; }
.course-menu { display: grid; gap: 10px; align-content: start; }
.course-link { padding: 14px 16px; border: 1px solid #fdba74; border-radius: 16px; background: #fff; color: #9a3412; text-align: left; }
.course-link.active { background: #fff7ed; }
.detail-card { padding: 20px; border: 1px solid #fde68a; border-radius: 20px; background: linear-gradient(180deg, #fff7ed 0%, #fff 100%); }
.detail-card h4, .detail-card p { margin: 12px 0 0; }
@media (max-width: 720px) {
  .detail-project { grid-template-columns: 1fr; }
}
</style>
