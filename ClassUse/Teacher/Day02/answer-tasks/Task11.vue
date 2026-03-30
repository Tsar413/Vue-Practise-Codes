<template>
  <TaskPanel v-bind="meta">
    <div class="filters">
      <select v-model="currentType">
        <option value="全部">全部</option>
        <option value="课程">课程</option>
        <option value="作业">作业</option>
        <option value="活动">活动</option>
      </select>
      <input v-model="keyword" type="text" placeholder="输入通知关键字" />
    </div>
    <p class="count">当前通知数：{{ filteredNotices.length }}</p>
    <div class="list">
      <article v-for="notice in filteredNotices" :key="notice.title" class="item">
        <strong>{{ notice.title }}</strong>
        <p>{{ notice.type }}</p>
      </article>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[10]!
const currentType = ref('全部')
const keyword = ref('')
const notices = ref([
  { title: 'Vue 基础课调到 305 教室', type: '课程' },
  { title: 'Day02 作业今晚 8 点提交', type: '作业' },
  { title: '周五举行前端作品展示', type: '活动' },
  { title: '组件练习补交截止明天中午', type: '作业' },
])
const filteredNotices = computed(() =>
  notices.value.filter((notice) => {
    const matchType = currentType.value === '全部' || notice.type === currentType.value
    const matchKeyword = notice.title.includes(keyword.value.trim())
    return matchType && matchKeyword
  }),
)
</script>

<style scoped>
.filters { display: grid; grid-template-columns: 180px 1fr; gap: 12px; }
select, input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.count { margin-top: 14px; font-weight: 700; }
.list { display: grid; gap: 12px; margin-top: 12px; }
.item { padding: 14px; border-radius: 14px; background: #f8fafc; }
.item strong, .item p { display: block; margin: 0; }
.item p { margin-top: 8px; color: #64748b; }
</style>
