<template>
  <section class="task-panel">
    <header class="task-header">
      <div>
        <p class="task-id">{{ id }}</p>
        <h2>{{ title }}</h2>
      </div>
      <span class="tag">{{ points }}</span>
    </header>

    <div class="task-grid">
      <article class="info-card">
        <h3>题目要求</h3>
        <p>{{ requirement }}</p>
        <h3>预期效果</h3>
        <p>{{ expectation }}</p>
      </article>

      <article class="preview-card">
        <h3>完成效果</h3>
        <slot />
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  title: string
  points: string
  requirement: string
  expectation: string
}>()
</script>

<style scoped>
.task-panel {
  display: grid;
  gap: 18px;
}

.task-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
}

.task-id {
  margin: 0 0 8px;
  font-size: 13px;
  color: #0f766e;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h2,
h3 {
  margin: 0;
}

.tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: #ccfbf1;
  color: #115e59;
  font-size: 13px;
}

.task-grid {
  display: grid;
  grid-template-columns: 320px minmax(0, 1fr);
  gap: 18px;
}

.info-card,
.preview-card {
  padding: 20px;
  border: 1px solid #dbe4f0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
}

.info-card {
  background: linear-gradient(180deg, #f8fffe 0%, #effcf7 100%);
}

.preview-card :deep(button) {
  font: inherit;
}

.info-card p {
  line-height: 1.8;
  color: #475569;
}

.info-card h3 + p {
  margin-top: 10px;
  margin-bottom: 18px;
}

@media (max-width: 900px) {
  .task-grid {
    grid-template-columns: 1fr;
  }

  .task-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
