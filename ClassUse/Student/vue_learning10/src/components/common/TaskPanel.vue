<template>
  <section class="task-panel">
    <header class="task-header">
      <div>
        <p class="task-id">{{ id }}</p>
        <h2>{{ title }}</h2>
      </div>
      <span class="tag">{{ points }}</span>
    </header>

    <section class="brief-grid">
      <article class="brief-card">
        <h3>考试要求</h3>
        <p>{{ requirement }}</p>
      </article>
      <article class="brief-card">
        <h3>完成目标</h3>
        <p>{{ expectation }}</p>
      </article>
    </section>

    <article class="preview-card">
      <slot />
    </article>
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

h2 {
  margin: 0;
}

.tag {
  padding: 8px 12px;
  border-radius: 999px;
  background: #ccfbf1;
  color: #115e59;
  font-size: 13px;
}

.brief-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.brief-card {
  padding: 16px 18px;
  border: 1px solid #dbe4f0;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.06);
}

.brief-card h3,
.brief-card p {
  margin: 0;
}

.brief-card p {
  margin-top: 10px;
  line-height: 1.8;
  color: #64748b;
}

.preview-card {
  padding: 20px;
  border: 1px solid #dbe4f0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
}

.preview-card :deep(button) {
  font: inherit;
}

@media (max-width: 900px) {
  .task-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .brief-grid {
    grid-template-columns: 1fr;
  }
}
</style>
