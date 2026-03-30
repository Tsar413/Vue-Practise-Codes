<template>
  <article class="card">
    <span class="tag">{{ tag }}</span>
    <h4>{{ title }}</h4>
    <p>讲师：{{ teacher }}</p>
    <p v-if="lessons !== undefined">课时：{{ lessons }}</p>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  teacher: string
  lessons?: number
  tag: string
}>()
</script>

<style scoped>
.card { padding: 18px; border: 1px solid #fed7aa; border-radius: 18px; background: linear-gradient(180deg, #fff7ed 0%, #fff 100%); }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #ffedd5; color: #9a3412; font-size: 12px; }
.card h4, .card p { margin: 10px 0 0; }
</style>
