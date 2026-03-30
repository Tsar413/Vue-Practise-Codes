<template>
  <article class="card">
    <h4>{{ title }}</h4>
    <p>讲师：{{ teacher }}</p>
    <p>课时：{{ lessons }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  teacher: string
  lessons: number
}>()
</script>

<style scoped>
.card { padding: 18px; border: 1px solid #fed7aa; border-radius: 18px; background: #fff7ed; }
.card h4, .card p { margin: 0; }
.card p { margin-top: 8px; }
</style>
