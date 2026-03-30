<template>
  <section class="panel">
    <h4>缓存面板 A</h4>
    <input v-model="keyword" class="input" type="text" placeholder="输入关键词，切换后再回来观察" />
  </section>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits<{ log: [text: string] }>()

const keyword = ref('')

onMounted(() => emit('log', 'PanelA mounted'))
onActivated(() => emit('log', 'PanelA activated'))
onDeactivated(() => emit('log', 'PanelA deactivated'))
onUnmounted(() => emit('log', 'PanelA unmounted'))
</script>

<style scoped>
.panel {
  display: grid;
  gap: 10px;
  padding: 18px;
  border: 1px dashed #93c5fd;
  border-radius: 18px;
  background: #f8fbff;
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
