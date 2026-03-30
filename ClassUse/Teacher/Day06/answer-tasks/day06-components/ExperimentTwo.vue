<template>
  <section class="panel">实验 B 内容区</section>
</template>

<script setup lang="ts">
import { onActivated, onMounted, onUpdated } from 'vue'
const emit = defineEmits<{ append: [text: string] }>()
onMounted(() => emit('append', 'ExperimentTwo mounted'))
onUpdated(() => emit('append', 'ExperimentTwo updated'))
onActivated(() => emit('append', 'ExperimentTwo activated'))
</script>

<style scoped>
.panel { padding: 18px; border: 1px dashed #93c5fd; border-radius: 16px; color: #475569; }
</style>
