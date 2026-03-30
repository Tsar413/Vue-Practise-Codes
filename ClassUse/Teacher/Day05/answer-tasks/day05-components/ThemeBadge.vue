<template>
  <div class="badge" :style="{ borderColor: themeColor, color: themeColor }">
    当前主题色：{{ themeColor }}
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const themeColor = inject('themeColor', '#f59e0b')
</script>

<style scoped>
.badge { display: inline-flex; padding: 8px 12px; border: 2px solid; border-radius: 999px; font-weight: 700; }
</style>
