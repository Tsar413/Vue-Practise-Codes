<template>
  <section class="list-pane">
    <header class="head">
      <div>
        <h3>今日热搜榜</h3>
        <p>父组件统一保存热搜数组，列表页只负责展示和反馈点击事件。</p>
      </div>
      <span class="tag">props + emit</span>
    </header>

    <article
      v-for="(item, index) in hotList"
      :key="item.id"
      class="hot-item"
      @click="emit('select', item)"
    >
      <span class="rank">{{ index + 1 }}</span>
      <div class="content">
        <h4>{{ item.title }}</h4>
        <p>{{ item.summary }}</p>
      </div>
      <div class="meta">
        <strong>{{ item.hot }}</strong>
        <span>{{ item.tag }}</span>
      </div>
    </article>
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
  hotList: HotItem[]
}>()

const emit = defineEmits<{
  select: [item: HotItem]
}>()
</script>

<style scoped>
.list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.head { display: flex; justify-content: space-between; gap: 14px; align-items: flex-start; }
.head h3, .head p, .hot-item h4, .hot-item p { margin: 0; }
.head p { margin-top: 8px; color: #64748b; line-height: 1.7; }
.tag { padding: 8px 12px; border-radius: 999px; background: #ffedd5; color: #c2410c; font-size: 13px; }
.hot-item { display: grid; grid-template-columns: 44px 1fr auto; gap: 14px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fffaf5; cursor: pointer; }
.rank { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 12px; background: #fed7aa; color: #9a3412; font-weight: 700; }
.content p { margin-top: 6px; color: #64748b; line-height: 1.7; }
.meta { text-align: right; color: #9a3412; }
.meta span { display: block; margin-top: 6px; color: #64748b; font-size: 13px; }
@media (max-width: 720px) {
  .head, .hot-item { grid-template-columns: 1fr; }
  .meta { text-align: left; }
}
</style>
