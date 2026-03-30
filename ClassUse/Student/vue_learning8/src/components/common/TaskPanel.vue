<template>
  <section class="task-panel">
    <header class="task-header">
      <div>
        <p class="task-id">{{ id }}</p>
        <h2>{{ title }}</h2>
      </div>
      <span class="tag">{{ points }}</span>
    </header>

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
}
</style>
