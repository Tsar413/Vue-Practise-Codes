<template>
  <section class="panel">
    <h4>缓存面板 B</h4>
    <textarea
      v-model="note"
      class="box"
      rows="4"
      placeholder="这里也可以保留内容，用来观察 deactivated 和 activated"
    />
  </section>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated, onMounted, onUnmounted, ref } from 'vue'

const emit = defineEmits<{ log: [text: string] }>()

const note = ref('')

onMounted(() => emit('log', 'PanelB mounted'))
onActivated(() => emit('log', 'PanelB activated'))
onDeactivated(() => emit('log', 'PanelB deactivated'))
onUnmounted(() => emit('log', 'PanelB unmounted'))
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

.box {
  width: 100%;
  padding: 14px;
  border: 1px solid #bfdbfe;
  border-radius: 14px;
  font: inherit;
  resize: vertical;
}
</style>
