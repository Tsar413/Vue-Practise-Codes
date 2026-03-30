<template><button class="btn" @click="$emit('like')">点赞 +1</button></template>
<script setup lang="ts">defineEmits<{like:[]}>()</script>
<style scoped>.btn{padding:10px 16px;border:none;border-radius:12px;background:#b45309;color:#fff;cursor:pointer}</style>
