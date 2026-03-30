<template>
  <TaskPanel v-bind="meta">
    <div class="panel">
      <p class="intro">祖先组件提供主题色，深层组件直接获取：</p>
      <ThemeBadge />
    </div>
  </TaskPanel>
</template>
<script setup lang="ts">
import { provide } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import ThemeBadge from './day05-components/ThemeBadge.vue'
const meta = taskMetaList[9]!
provide('themeColor', '#f59e0b')
</script>
<style scoped>
.panel { display: grid; gap: 12px; }
.intro { margin: 0; color: #475569; }
</style>
