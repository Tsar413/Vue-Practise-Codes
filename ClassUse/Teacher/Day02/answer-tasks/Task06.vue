<template>
  <TaskPanel v-bind="meta">
    <input v-model="keyword" type="text" placeholder="请输入搜索关键字" />
    <p class="tip">{{ searchTip }}</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[5]!
const keyword = ref('')
const searchTip = computed(() =>
  keyword.value.trim() ? `正在搜索“${keyword.value.trim()}”相关内容...` : '请输入关键字开始搜索。',
)
</script>

<style scoped>
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.tip { margin-top: 14px; color: #475569; }
</style>
