<template>
  <section class="detail-pane">
    <button class="back-button" @click="emit('back')">返回列表</button>

    <div class="detail-card">
      <span class="tag">{{ item.tag }}</span>
      <h3>{{ item.title }}</h3>
      <p class="hot">实时热度：{{ item.hot }}</p>
      <p class="summary">{{ item.summary }}</p>
      <p class="content">{{ item.content }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
type HotItem = {
  id: number
  title: string
  hot: number
  summary: string
  content: string
  tag: string
}

defineProps<{
  item: HotItem
}>()

const emit = defineEmits<{
  back: []
}>()
</script>

<style scoped>
.detail-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.back-button { padding: 10px 14px; border: none; border-radius: 12px; background: #ea580c; color: #fff; cursor: pointer; }
.detail-card { margin-top: 14px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #fff7ed 0%, #fff 100%); border: 1px solid #fdba74; }
.detail-card h3, .detail-card p { margin: 0; }
.tag { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; background: #ffedd5; color: #c2410c; font-size: 12px; }
.hot { margin-top: 12px; color: #9a3412; font-weight: 600; }
.summary { margin-top: 10px; line-height: 1.8; color: #475569; }
.content { margin-top: 12px; line-height: 1.9; color: #334155; }
</style>
