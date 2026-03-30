<template>
  <div class="layout">
    <header class="topbar">
      <div>
        <p class="eyebrow">Vue Day08</p>
        <h1>Vue 3 生活化综合项目训练与跨页面组件协作</h1>
      </div>
      <nav class="nav">
        <button
          v-for="item in navItems"
          :key="item.key"
          :class="['nav-button', { active: currentPage === item.key }]"
          @click="currentPage = item.key"
        >
          {{ item.label }}
        </button>
      </nav>
    </header>

    <main class="content">
      <component :is="currentView" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ExamplesPage from '@/pages/ExamplesPage.vue'
import TasksPage from '@/pages/TasksPage.vue'

const currentPage = ref<'examples' | 'tasks'>('examples')

const navItems = [
  { key: 'examples', label: '示例与思路' },
  { key: 'tasks', label: '项目准备页' },
] as const

const currentView = computed(() =>
  currentPage.value === 'examples' ? ExamplesPage : TasksPage,
)
</script>

<style scoped>
.layout {
  min-height: 100vh;
  padding: 24px;
  background:
    radial-gradient(circle at top left, rgba(251, 146, 60, 0.2), transparent 24%),
    linear-gradient(180deg, #fff7ed 0%, #f8fafc 100%);
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
  background: linear-gradient(135deg, #9a3412, #ea580c);
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

.nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-button {
  padding: 12px 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-button.active,
.nav-button:hover {
  background: #fff;
  color: #9a3412;
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
