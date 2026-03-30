<template>
  <section class="list-pane">
    <article
      v-for="item in books"
      :key="item.id"
      :class="['book-item', { active: currentBook?.id === item.id }]"
      @click="emit('select', item)"
    >
      <div class="cover">{{ item.title.slice(0, 3) }}</div>
      <div class="meta">
        <h3>{{ item.title }}</h3>
        <p>{{ item.category }} / 作者：{{ item.author }}</p>
        <p>库存：{{ item.stock }} 本</p>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
type Book = {
  id: number
  title: string
  author: string
  category: string
  stock: number
  intro: string
  location: string
}

defineProps<{
  books: Book[]
  currentBook: Book | null
}>()

const emit = defineEmits<{
  select: [item: Book]
}>()
</script>

<style scoped>
.list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.book-item { display: grid; grid-template-columns: 60px 1fr; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fff; cursor: pointer; }
.book-item.active { border-color: #0f766e; background: #f0fdfa; }
.cover { display: grid; place-items: center; width: 60px; height: 72px; border-radius: 14px; background: linear-gradient(180deg, #0f766e, #115e59); color: #fff; font-size: 12px; font-weight: 700; }
.meta h3, .meta p { margin: 0; }
.meta p { margin-top: 6px; color: #64748b; }
</style>
