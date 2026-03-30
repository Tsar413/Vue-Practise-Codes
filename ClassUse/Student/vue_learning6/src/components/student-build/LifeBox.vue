<template>
  <section class="panel">
    <h4>生命周期观察组件</h4>
    <p>当前计数：{{ count }}</p>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'

const props = defineProps<{ count: number }>()

const emit = defineEmits<{ append: [text: string] }>()

onMounted(() => emit('append', `mounted: 组件已挂载，count = ${props.count}`))
onUpdated(() => emit('append', `updated: 组件更新完成，count = ${props.count}`))
onUnmounted(() => emit('append', 'unmounted: 组件已卸载'))
</script>

<style scoped>
.panel {
  padding: 18px;
  border: 1px dashed #93c5fd;
  border-radius: 18px;
  background: #f8fbff;
}

h4,
p {
  margin: 0;
}

p {
  margin-top: 8px;
  color: #475569;
}
</style>
