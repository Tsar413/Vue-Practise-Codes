<template>
  <TaskPanel v-bind="meta">
    <div class="wrap">
      <div class="toolbar">
        <button @click="count++">修改数据</button>
        <button @click="visible = !visible">{{ visible ? '卸载组件' : '重新挂载组件' }}</button>
      </div>
      <LifeBox v-if="visible" :count="count" @append="appendLog" />
      <ul class="logs">
        <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
      </ul>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import LifeBox from './day06-components/LifeBox.vue'

const meta = taskMetaList[5]!
const logs = ref<string[]>([])
const count = ref(0)
const visible = ref(true)

function appendLog(text: string) {
  logs.value.unshift(text)
}
</script>

<style scoped>
.wrap { display: grid; gap: 14px; }
.toolbar { display: flex; gap: 10px; }
.toolbar button { padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 12px; background: #f8fafc; }
.logs { margin: 0; padding-left: 18px; color: #475569; }
.logs li + li { margin-top: 8px; }
</style>
