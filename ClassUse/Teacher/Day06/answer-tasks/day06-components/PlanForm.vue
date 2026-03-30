<template>
  <textarea class="box" rows="4" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" />
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<style scoped>
.box { width: 100%; padding: 14px; border: 1px solid #bbf7d0; border-radius: 16px; font: inherit; resize: vertical; }
</style>
