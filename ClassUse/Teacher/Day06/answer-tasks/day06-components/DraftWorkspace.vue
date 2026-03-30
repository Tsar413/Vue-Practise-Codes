<template>
  <textarea class="box" rows="5" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.box { width: 100%; padding: 14px; border: 1px solid #cbd5e1; border-radius: 14px; font: inherit; resize: vertical; }
</style>
