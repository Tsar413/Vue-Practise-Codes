<template>
  <TaskPanel v-bind="meta">
    <div class="wrap">
      <div class="tabs">
        <button :class="{ active: current === 'a' }" @click="current = 'a'">缓存面板 A</button>
        <button :class="{ active: current === 'b' }" @click="current = 'b'">缓存面板 B</button>
      </div>
      <KeepAlive>
        <CachePanelA v-if="current === 'a'" @log="appendLog" />
        <CachePanelB v-else @log="appendLog" />
      </KeepAlive>
      <ul class="logs">
        <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
      </ul>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { KeepAlive, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import CachePanelA from './day06-components/CachePanelA.vue'
import CachePanelB from './day06-components/CachePanelB.vue'

const meta = taskMetaList[6]!
const logs = ref<string[]>([])
const current = ref<'a' | 'b'>('a')

function appendLog(text: string) {
  logs.value.unshift(text)
}
</script>

<style scoped>
.wrap { display: grid; gap: 14px; }
.tabs { display: flex; gap: 10px; }
.tabs button { padding: 10px 14px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; }
.tabs button.active { background: #dbeafe; }
.logs { margin: 0; padding-left: 18px; color: #475569; }
</style>
