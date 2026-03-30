<template>
  <TaskPanel v-bind="meta">
    <MessageBox :message="message" />
  </TaskPanel>
</template>
<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import MessageBox from './day05-components/MessageBox.vue'
const meta = taskMetaList[4]!
const message = '本周五晚自习改为 Vue 组件通信答疑课，请提前准备练习代码。'
</script>
