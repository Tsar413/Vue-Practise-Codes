<template>
  <TaskPanel v-bind="meta">
    <div class="wrap">
      <div class="tabs">
        <button :class="{ active: current === 'plan' }" @click="current = 'plan'">学习计划</button>
        <button :class="{ active: current === 'draft' }" @click="current = 'draft'">笔记草稿</button>
      </div>
      <KeepAlive>
        <PlanForm v-if="current === 'plan'" v-model="planText" />
        <DraftForm v-else v-model="draftText" />
      </KeepAlive>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { KeepAlive, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import DraftForm from './day06-components/DraftForm.vue'
import PlanForm from './day06-components/PlanForm.vue'

const meta = taskMetaList[4]!
const current = ref<'plan' | 'draft'>('plan')
const planText = ref('本周完成插槽与动态组件练习')
const draftText = ref('KeepAlive 会保留组件状态')
</script>

<style scoped>
.wrap { display: grid; gap: 14px; }
.tabs { display: flex; gap: 10px; }
.tabs button { padding: 10px 14px; border: 1px solid #a7f3d0; border-radius: 999px; background: #fff; color: #047857; }
.tabs button.active { background: #d1fae5; }
</style>
