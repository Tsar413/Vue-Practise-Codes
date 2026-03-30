<template>
  <section class="panel">缓存面板 B</section>
</template>

<script setup lang="ts">
import { onActivated, onDeactivated } from 'vue'
const emit = defineEmits<{ log: [text: string] }>()
onActivated(() => emit('log', 'PanelB activated'))
onDeactivated(() => emit('log', 'PanelB deactivated'))
</script>

<style scoped>
.panel { padding: 18px; border: 1px dashed #93c5fd; border-radius: 18px; background: #f8fbff; }
</style>
