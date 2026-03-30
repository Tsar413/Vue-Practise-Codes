<template>
  <TaskPanel v-bind="meta">
    <PanelBox>
      <p>这里是父组件传入的说明内容，子组件只负责固定标题、边框和布局。</p>
    </PanelBox>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import PanelBox from './day06-components/PanelBox.vue'
const meta = taskMetaList[0]!
</script>
