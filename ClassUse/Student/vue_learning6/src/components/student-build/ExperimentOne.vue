<template>
  <section class="panel">
    <h4>实验 A</h4>
    <input v-model="value" class="input" type="text" placeholder="输入实验 A 的观察内容" />
  </section>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, onUpdated, ref } from 'vue'

const emit = defineEmits<{ append: [text: string] }>()

const value = ref('')

onMounted(() => emit('append', 'ExperimentOne mounted'))
onUpdated(() => emit('append', 'ExperimentOne updated'))
onActivated(() => emit('append', 'ExperimentOne activated'))
onDeactivated(() => emit('append', 'ExperimentOne deactivated'))
onUnmounted(() => emit('append', 'ExperimentOne unmounted'))
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

.input {
  padding: 12px 14px;
  border: 1px solid #bfdbfe;
  border-radius: 14px;
  font: inherit;
}
</style>
