<template>
  <section class="panel">
    <h4>实验 B</h4>
    <textarea
      v-model="note"
      class="box"
      rows="4"
      placeholder="输入实验 B 的记录，方便观察缓存和日志"
    />
  </section>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, onUpdated, ref } from 'vue'

const emit = defineEmits<{ append: [text: string] }>()

const note = ref('')

onMounted(() => emit('append', 'ExperimentTwo mounted'))
onUpdated(() => emit('append', 'ExperimentTwo updated'))
onActivated(() => emit('append', 'ExperimentTwo activated'))
onDeactivated(() => emit('append', 'ExperimentTwo deactivated'))
onUnmounted(() => emit('append', 'ExperimentTwo unmounted'))
</script>

<style scoped>
.panel {
  display: grid;
  gap: 10px;
  padding: 18px;
  border: 1px dashed #93c5fd;
  border-radius: 16px;
  color: #475569;
}

h4 {
  margin: 0;
}

.box {
  width: 100%;
  padding: 14px;
  border: 1px solid #bfdbfe;
  border-radius: 14px;
  font: inherit;
  resize: vertical;
}
</style>
