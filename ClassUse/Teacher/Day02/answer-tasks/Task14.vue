<template>
  <TaskPanel v-bind="meta">
    <input v-model.number="score" type="number" placeholder="请输入练习得分" />
    <div :class="['level-card', levelClass]">
      <strong>当前等级：{{ levelText }}</strong>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[13]!
const score = ref(75)
const levelText = computed(() => {
  if (score.value < 60) return '待加强'
  if (score.value < 80) return '合格'
  if (score.value < 90) return '良好'
  return '优秀'
})
const levelClass = computed(() => {
  if (score.value < 60) return 'weak'
  if (score.value < 80) return 'normal'
  if (score.value < 90) return 'good'
  return 'excellent'
})
</script>

<style scoped>
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.level-card { margin-top: 14px; padding: 18px; border-radius: 16px; }
.weak { background: #fee2e2; color: #b91c1c; }
.normal { background: #fef3c7; color: #b45309; }
.good { background: #dbeafe; color: #1d4ed8; }
.excellent { background: #dcfce7; color: #166534; }
</style>
