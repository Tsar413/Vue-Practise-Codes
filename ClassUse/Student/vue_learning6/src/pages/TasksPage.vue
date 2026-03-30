<template>
  <section class="tasks-layout">
    <aside class="sidebar">
      <div class="sidebar-card">
        <h2>准备页面</h2>
        <p>Day06 准备页面按教案中的 13 道题展开。学生组件统一建议创建到 <code>src/components/student-build/</code>，按“先插槽，再切换，再缓存，再日志”的顺序完成。</p>
      </div>

      <button
        v-for="item in tasks"
        :key="item.id"
        :class="['task-link', { active: activeId === item.id }]"
        @click="activeId = item.id"
      >
        <span>{{ item.id }}</span>
        {{ item.title }}
      </button>
    </aside>

    <section class="viewer">
      <component :is="activeComponent" />
    </section>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { taskMetaList } from '@/data/taskMeta'

const studentModules = import.meta.glob('@/components/student-tasks/*.vue', { eager: true })

function normalizeModules(modules: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(modules).map(([path, mod]) => {
      const match = path.match(/Task(\d+)\.vue$/)
      return [match?.[1], (mod as { default: unknown }).default]
    }),
  )
}

const studentMap = normalizeModules(studentModules) as Record<string, unknown>
const tasks = taskMetaList.map(({ id, title }) => ({ id, title }))
const activeId = ref('01')
const activeComponent = computed(() => studentMap[activeId.value])
</script>

<style scoped>
.tasks-layout {
  display: grid;
  grid-template-columns: 290px minmax(0, 1fr);
  gap: 20px;
}

.sidebar {
  display: grid;
  gap: 12px;
  align-content: start;
}

.sidebar-card {
  padding: 20px;
  border: 1px solid #dbe4f0;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.08);
}

.sidebar-card h2,
.sidebar-card p {
  margin: 0;
}

.sidebar-card p {
  margin-top: 10px;
  line-height: 1.7;
  color: #64748b;
}

.task-link {
  padding: 14px 16px;
  border: 1px solid #dbe4f0;
  border-radius: 16px;
  background: #fff;
  color: #334155;
  text-align: left;
  cursor: pointer;
  transition: 0.2s ease;
}

.task-link span {
  display: inline-block;
  min-width: 34px;
  margin-right: 8px;
  font-weight: 700;
  color: #0f766e;
}

.task-link.active,
.task-link:hover {
  border-color: #06b6d4;
  background: #ecfeff;
}

.viewer {
  min-width: 0;
}

@media (max-width: 960px) {
  .tasks-layout {
    grid-template-columns: 1fr;
  }

  .sidebar {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .sidebar-card {
    grid-column: 1 / -1;
  }
}
</style>
