<template>
  <TaskPanel v-bind="meta">
    <textarea v-model="draftText" rows="5" placeholder="请输入草稿内容"></textarea>
    <p class="count">字数：{{ draftLength }}</p>
    <div class="preview">{{ draftText || '这里显示草稿预览。' }}</div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[7]!
const draftText = ref('')
const draftLength = computed(() => draftText.value.length)
</script>

<style scoped>
textarea { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; resize: vertical; }
.count { margin-top: 12px; color: #475569; }
.preview { margin-top: 12px; padding: 14px; border-radius: 14px; background: #f8fafc; line-height: 1.8; min-height: 60px; }
</style>
