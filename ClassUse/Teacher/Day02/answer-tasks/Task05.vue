<template>
  <TaskPanel v-bind="meta">
    <input v-model.number="temperature" type="number" placeholder="请输入温度" />
    <p class="result">{{ advisorText }}</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[4]!
const temperature = ref(22)
const advisorText = computed(() => {
  if (temperature.value < 10) return '天气偏冷，建议穿厚外套。'
  if (temperature.value < 20) return '建议穿外套，注意保暖。'
  if (temperature.value < 28) return '温度舒适，常规穿搭即可。'
  return '天气较热，建议短袖并注意补水。'
})
</script>

<style scoped>
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.result { margin-top: 14px; padding: 14px; border-radius: 14px; background: #fff7ed; color: #9a3412; }
</style>
