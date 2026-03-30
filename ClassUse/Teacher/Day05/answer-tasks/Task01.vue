<template>
  <TaskPanel v-bind="meta">
    <BannerBox />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import BannerBox from './day05-components/BannerBox.vue'

const meta = taskMetaList[0]!
</script>
