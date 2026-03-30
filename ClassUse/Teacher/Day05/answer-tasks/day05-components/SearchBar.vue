<template>
  <div class="search-row">
    <input v-model.trim="keyword" type="text" placeholder="请输入课程关键词" />
    <button @click="emit('search', keyword)">搜索</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const keyword = ref('')
const emit = defineEmits<{
  search: [keyword: string]
}>()
</script>

<style scoped>
.search-row { display: grid; grid-template-columns: 1fr auto; gap: 12px; }
.search-row input { padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
.search-row button { padding: 10px 16px; border: none; border-radius: 12px; background: #b45309; color: #fff; cursor: pointer; }
@media (max-width: 720px) {
  .search-row { grid-template-columns: 1fr; }
}
</style>
