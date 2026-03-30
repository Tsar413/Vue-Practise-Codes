<template>
  <TaskPanel v-bind="meta">
    <div class="detail-shell">
      <button v-for="item in courseList" :key="item.id" class="course-link" @click="goDetail(item)">
        课程 {{ item.id }} · {{ item.title }}
      </button>
      <div class="params-card">
        <p>点击课程后，应带走：</p>
        <pre><code>{{ currentParams }}</code></pre>
      </div>
    </div>
  </TaskPanel>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[8]!
const courseList = [
  { id: '101', title: 'Vue 组件开发' },
  { id: '205', title: 'Emit 事件练习' },
]
const currentParams = ref({
  id: courseList[0].id,
  title: courseList[0].title,
})
function goDetail(course: (typeof courseList)[number]) {
  currentParams.value = { id: course.id, title: course.title }
}
</script>
<style scoped>
.detail-shell { display: grid; gap: 12px; }
.course-link { padding: 14px 16px; border: 1px solid #fdba74; border-radius: 16px; background: #fff; color: #9a3412; text-align: left; cursor: pointer; }
.params-card { padding: 16px; border-radius: 16px; background: #f8fafc; }
.params-card p, .params-card pre { margin: 0; }
.params-card pre { margin-top: 10px; }
</style>
