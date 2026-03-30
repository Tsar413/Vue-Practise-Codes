<template>
  <TaskPanel v-bind="meta">
    <div class="like-demo">
      <span>当前点赞数：{{ count }}</span>
      <LikeButton @like="count++" />
    </div>
  </TaskPanel>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import LikeButton from './day05-components/LikeButton.vue'
const meta = taskMetaList[7]!
const count = ref(8)
</script>
<style scoped>
.like-demo { display: flex; justify-content: space-between; gap: 12px; align-items: center; padding: 16px; border-radius: 16px; background: #fff7ed; }
</style>
