<template>
  <TaskPanel v-bind="meta">
    <div class="wrap">
      <div class="steps">
        <button :class="{ active: step === 1 }" @click="step = 1">步骤 1</button>
        <button :class="{ active: step === 2 }" @click="step = 2">步骤 2</button>
        <button :class="{ active: step === 3 }" @click="step = 3">步骤 3</button>
      </div>
      <component :is="currentComponent" />
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
import StepOne from './day06-components/StepOne.vue'
import StepTwo from './day06-components/StepTwo.vue'
import StepThree from './day06-components/StepThree.vue'
const meta = taskMetaList[12]!
const step = ref(1)
const currentComponent = computed(() => (step.value === 1 ? StepOne : step.value === 2 ? StepTwo : StepThree))
</script>

<style scoped>
.wrap { display: grid; gap: 14px; }
.steps { display: flex; gap: 10px; flex-wrap: wrap; }
.steps button { padding: 10px 16px; border: 1px solid #bfdbfe; border-radius: 999px; background: #fff; color: #1d4ed8; }
.steps button.active { background: #dbeafe; }
</style>
