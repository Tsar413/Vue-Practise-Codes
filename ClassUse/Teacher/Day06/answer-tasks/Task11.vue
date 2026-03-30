<template>
  <TaskPanel v-bind="meta">
    <DialogBox>
      <template #title>
        <h3>确认提交</h3>
      </template>
      <p>确认提交当前实训结果吗？提交后仍可继续查看历史日志。</p>
      <template #actions>
        <button>取消</button>
        <button class="primary">提交</button>
      </template>
    </DialogBox>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import DialogBox from './day06-components/DialogBox.vue'
const meta = taskMetaList[10]!
</script>
