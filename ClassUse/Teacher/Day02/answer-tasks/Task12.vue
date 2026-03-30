<template>
  <TaskPanel v-bind="meta">
    <div class="filters">
      <select v-model="currentCategory">
        <option value="全部">全部分类</option>
        <option value="基础">基础</option>
        <option value="进阶">进阶</option>
        <option value="项目">项目</option>
      </select>
      <select v-model="currentStatus">
        <option value="全部">全部状态</option>
        <option value="已完成">已完成</option>
        <option value="未完成">未完成</option>
      </select>
    </div>
    <div class="stats">
      <span>已完成：{{ completedCount }}</span>
      <span>未完成：{{ pendingCount }}</span>
    </div>
    <div class="list">
      <article v-for="plan in filteredPlans" :key="plan.name" class="item">
        <strong>{{ plan.name }}</strong>
        <p>{{ plan.category }} / {{ plan.done ? '已完成' : '未完成' }}</p>
      </article>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[11]!
const currentCategory = ref('全部')
const currentStatus = ref('全部')
const plans = ref([
  { name: '完成 v-model 练习', category: '基础', done: true },
  { name: '完成计算属性练习', category: '进阶', done: false },
  { name: '搭建课程面板页面', category: '项目', done: false },
  { name: '整理 Day02 笔记', category: '基础', done: true },
])
const completedCount = computed(() => plans.value.filter((plan) => plan.done).length)
const pendingCount = computed(() => plans.value.filter((plan) => !plan.done).length)
const filteredPlans = computed(() =>
  plans.value.filter((plan) => {
    const matchCategory = currentCategory.value === '全部' || plan.category === currentCategory.value
    const status = plan.done ? '已完成' : '未完成'
    const matchStatus = currentStatus.value === '全部' || status === currentStatus.value
    return matchCategory && matchStatus
  }),
)
</script>

<style scoped>
.filters { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.stats { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 14px; font-weight: 700; }
.list { display: grid; gap: 12px; margin-top: 14px; }
.item { padding: 14px; border-radius: 14px; background: #f8fafc; }
.item strong, .item p { display: block; margin: 0; }
.item p { margin-top: 8px; color: #64748b; }
</style>
