<template>
  <TaskPanel v-bind="meta">
    <div class="wrap">
      <aside class="nav">
        <button :class="{ active: current === 'stats' }" @click="current = 'stats'">统计面板</button>
        <button :class="{ active: current === 'draft' }" @click="current = 'draft'">草稿面板</button>
      </aside>
      <KeepAlive>
        <StatsPanel v-if="current === 'stats'" />
        <DraftPanel v-else v-model="draft" />
      </KeepAlive>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { KeepAlive, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import DraftPanel from './day06-components/DraftPanel.vue'
import StatsPanel from './day06-components/StatsPanel.vue'

const meta = taskMetaList[8]!
const current = ref<'stats' | 'draft'>('stats')
const draft = ref('这里是需要被保留的草稿内容')
</script>

<style scoped>
.wrap { display: grid; grid-template-columns: 180px minmax(0, 1fr); gap: 14px; }
.nav { display: grid; gap: 10px; }
.nav button { padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 14px; background: #fff; text-align: left; }
.nav button.active { border-color: #0ea5e9; background: #ecfeff; }
@media (max-width: 720px) { .wrap { grid-template-columns: 1fr; } }
</style>
