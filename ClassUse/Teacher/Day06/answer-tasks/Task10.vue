<template>
  <TaskPanel v-bind="meta">
    <LabLayout>
      <template #header>
        <div class="hero">学习实验室</div>
      </template>
      <template #sidebar>
        <div class="side">
          <button :class="{ active: current === 'a' }" @click="current = 'a'">实验 A</button>
          <button :class="{ active: current === 'b' }" @click="current = 'b'">实验 B</button>
        </div>
      </template>
      <div class="content">
        <KeepAlive>
          <ExperimentOne v-if="current === 'a'" @append="appendLog" />
          <ExperimentTwo v-else @append="appendLog" />
        </KeepAlive>
      </div>
      <template #footer>
        <ul class="logs">
          <li v-for="(item, index) in logs" :key="index">{{ item }}</li>
        </ul>
      </template>
    </LabLayout>
  </TaskPanel>
</template>

<script setup lang="ts">
import { KeepAlive, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import ExperimentOne from './day06-components/ExperimentOne.vue'
import ExperimentTwo from './day06-components/ExperimentTwo.vue'
import LabLayout from './day06-components/LabLayout.vue'

const meta = taskMetaList[9]!
const logs = ref<string[]>([])
const current = ref<'a' | 'b'>('a')

function appendLog(text: string) {
  logs.value.unshift(text)
}
</script>

<style scoped>
 .hero { padding: 14px 18px; border-radius: 16px; background: #e0f2fe; color: #0c4a6e; font-weight: 700; }
 .side { display: grid; gap: 10px; padding: 14px 18px; border-radius: 16px; background: #e0f2fe; }
 .content { padding: 16px; border: 1px solid #dbeafe; border-radius: 16px; background: #fff; }
 .side button { padding: 10px 14px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; text-align: left; }
 .side button.active { background: #dbeafe; }
 .logs { margin: 0; padding-left: 18px; color: #475569; }
</style>
