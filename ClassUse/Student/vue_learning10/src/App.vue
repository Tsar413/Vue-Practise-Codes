<template>
  <div class="layout">
    <header class="topbar">
      <div>
        <p class="eyebrow">Vue Day10</p>
        <h1>Vue 3 考试项目实战与阶段知识整合</h1>
      </div>
      <p class="exam-note">考试模式：只保留题目页，不提供页面内代码提示。</p>
    </header>

    <main class="content">
      <TasksPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import TasksPage from '@/pages/TasksPage.vue'
</script>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 24px;
  background:
    radial-gradient(circle at top left, rgba(16, 185, 129, 0.18), transparent 24%),
    linear-gradient(180deg, #ecfdf5 0%, #f8fafc 100%);
  color: #1f2937;
}

.topbar {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  width: min(1200px, 100%);
  margin: 0 auto 24px;
  padding: 24px 28px;
  border-radius: 24px;
  background: linear-gradient(135deg, #065f46, #0f766e);
  color: #fff;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
}

.eyebrow {
  margin: 0 0 8px;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  opacity: 0.8;
}

h1 {
  margin: 0;
  font-size: clamp(28px, 3vw, 40px);
}

.exam-note {
  margin: 0;
  max-width: 280px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.88);
}

.content {
  width: min(1200px, 100%);
  margin: 0 auto;
}

@media (max-width: 800px) {
  .layout {
    padding: 16px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
}
</style>
