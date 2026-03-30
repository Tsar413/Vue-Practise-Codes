<template>
  <section class="panel">当前计数：{{ count }}</section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated, watch } from 'vue'

const props = defineProps<{ count: number }>()
const emit = defineEmits<{ append: [text: string] }>()

onMounted(() => emit('append', 'mounted: 组件已挂载'))
onUpdated(() => emit('append', 'updated: 组件已更新'))
onUnmounted(() => emit('append', 'unmounted: 组件已卸载'))
watch(() => props.count, value => emit('append', `count changed: ${value}`))
</script>

<style scoped>
.panel { padding: 18px; border: 1px dashed #93c5fd; border-radius: 18px; background: #f8fbff; }
</style>
