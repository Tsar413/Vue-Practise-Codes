<template>
  <TaskPanel v-bind="meta">
    <div class="panel">
      <SearchBar @search="handleSearch" />
      <p class="result">父组件收到的关键词：{{ keyword || '暂无' }}</p>
    </div>
  </TaskPanel>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import SearchBar from './day05-components/SearchBar.vue'
const meta = taskMetaList[6]!
const keyword = ref('')
function handleSearch(value: string) {
  keyword.value = value
}
</script>
<style scoped>
.panel { display: grid; gap: 14px; }
.result { margin: 0; color: #475569; }
</style>
