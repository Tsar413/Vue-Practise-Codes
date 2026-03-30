<template>
  <div class="table">
    <div class="table-row head">
      <span>课程名</span>
      <span>难度</span>
      <span>操作</span>
    </div>
    <slot
      v-for="row in rows"
      :key="row.title"
      :row="row"
    />
  </div>
</template>

<script setup lang="ts">
const rows = [
  { title: 'Vue 插槽', level: '中等', teacher: '李老师' },
  { title: '动态组件', level: '中等', teacher: '陈老师' },
  { title: 'KeepAlive', level: '进阶', teacher: '周老师' },
]
</script>

<style scoped>
.table { overflow: hidden; border: 1px solid #dbe4f0; border-radius: 18px; background: #fff; }
.table-row { display: grid; grid-template-columns: 1.6fr 1fr auto; gap: 12px; align-items: center; padding: 14px 16px; border-top: 1px solid #e2e8f0; }
.table-row.head { border-top: 0; background: #f8fafc; font-weight: 700; }
</style>
