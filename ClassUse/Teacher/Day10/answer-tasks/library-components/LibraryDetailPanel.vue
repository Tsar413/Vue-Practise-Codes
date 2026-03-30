<template>
  <section v-if="currentBook" class="detail-pane">
    <div class="detail-card">
      <div class="detail-head">
        <div class="cover">{{ currentBook.title.slice(0, 3) }}</div>
        <div>
          <h3>{{ currentBook.title }}</h3>
          <p>{{ currentBook.category }} / 作者：{{ currentBook.author }}</p>
        </div>
      </div>

      <div class="info-grid">
        <div>
          <span>馆藏位置</span>
          <strong>{{ currentBook.location }}</strong>
        </div>
        <div>
          <span>当前库存</span>
          <strong>{{ currentBook.stock }} 本</strong>
        </div>
      </div>

      <div class="intro-box">
        <p>{{ currentBook.intro }}</p>
      </div>
    </div>
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
  currentBook: Book | null
}>()
</script>

<style scoped>
.detail-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.detail-card { padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfeff 0%, #fff 100%); border: 1px solid #99f6e4; }
.detail-head { display: flex; gap: 14px; align-items: center; }
.cover { display: grid; place-items: center; width: 70px; height: 86px; border-radius: 16px; background: linear-gradient(180deg, #0f766e, #115e59); color: #fff; font-size: 12px; font-weight: 700; }
.detail-head h3, .detail-head p, .intro-box p { margin: 0; }
.detail-head p { margin-top: 6px; color: #64748b; }
.info-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 14px; }
.info-grid div { padding: 12px; border-radius: 14px; background: #fff; border: 1px solid #dbe4f0; }
.info-grid span { display: block; color: #64748b; font-size: 13px; }
.info-grid strong { display: block; margin-top: 6px; }
.intro-box { margin-top: 12px; padding: 14px; border-radius: 14px; background: #fff; border: 1px dashed #94a3b8; }
@media (max-width: 700px) {
  .info-grid { grid-template-columns: 1fr; }
}
</style>
