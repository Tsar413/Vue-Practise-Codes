<template><div class="message">{{ message }}</div></template>
<script setup lang="ts">defineProps<{message:string}>()</script>
<style scoped>.message{padding:16px;border-left:4px solid #f59e0b;background:#fff7ed;color:#9a3412;border-radius:12px}</style>
