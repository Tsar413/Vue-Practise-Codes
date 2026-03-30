<template>
  <TaskPanel v-bind="meta">
    <div class="filters">
      <select v-model="currentDay">
        <option value="全部">全部星期</option>
        <option value="周一">周一</option>
        <option value="周二">周二</option>
        <option value="周三">周三</option>
        <option value="周四">周四</option>
        <option value="周五">周五</option>
      </select>
      <input v-model="keyword" type="text" placeholder="搜索姓名或区域" />
    </div>
    <div class="list">
      <article v-for="duty in filteredDuties" :key="`${duty.day}-${duty.name}-${duty.area}`" class="item">
        <strong>{{ duty.day }} / {{ duty.name }}</strong>
        <p>{{ duty.area }}</p>
      </article>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[14]!
const currentDay = ref('全部')
const keyword = ref('')
const duties = ref([
  { day: '周一', name: '张三', area: '305 机房' },
  { day: '周二', name: '李四', area: '前端实验室' },
  { day: '周三', name: '王五', area: '项目工位区' },
  { day: '周四', name: '赵六', area: '305 机房' },
  { day: '周五', name: '钱七', area: '前端实验室' },
])
const filteredDuties = computed(() =>
  duties.value.filter((duty) => {
    const matchDay = currentDay.value === '全部' || duty.day === currentDay.value
    const text = `${duty.name}${duty.area}`
    const matchKeyword = text.includes(keyword.value.trim())
    return matchDay && matchKeyword
  }),
)
</script>

<style scoped>
.filters { display: grid; grid-template-columns: 180px 1fr; gap: 12px; }
select, input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.list { display: grid; gap: 12px; margin-top: 14px; }
.item { padding: 14px; border-radius: 14px; background: #f8fafc; }
.item strong, .item p { display: block; margin: 0; }
.item p { margin-top: 8px; color: #64748b; }
</style>
