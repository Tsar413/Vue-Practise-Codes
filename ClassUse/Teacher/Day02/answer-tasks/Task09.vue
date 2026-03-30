<template>
  <TaskPanel v-bind="meta">
    <div class="filters">
      <select v-model="currentCategory">
        <option value="全部">全部</option>
        <option value="基础">基础</option>
        <option value="进阶">进阶</option>
        <option value="项目">项目</option>
      </select>
      <input v-model="keyword" type="text" placeholder="输入课程关键字" />
    </div>
    <div class="grid">
      <article v-for="course in filteredCourses" :key="course.name" class="card">
        <h4>{{ course.name }}</h4>
        <p>{{ course.category }}</p>
      </article>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[8]!
const currentCategory = ref('全部')
const keyword = ref('')
const courses = ref([
  { name: 'Vue 基础语法', category: '基础' },
  { name: '表单绑定训练', category: '基础' },
  { name: '计算属性进阶', category: '进阶' },
  { name: '项目页面联动', category: '项目' },
])
const filteredCourses = computed(() =>
  courses.value.filter((course) => {
    const matchCategory = currentCategory.value === '全部' || course.category === currentCategory.value
    const matchKeyword = course.name.includes(keyword.value.trim())
    return matchCategory && matchKeyword
  }),
)
</script>

<style scoped>
.filters { display: grid; grid-template-columns: 180px 1fr; gap: 12px; }
select, input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 14px; }
.card { padding: 14px; border-radius: 14px; background: #f8fafc; }
.card h4, .card p { margin: 0; }
.card p { margin-top: 8px; color: #64748b; }
</style>
