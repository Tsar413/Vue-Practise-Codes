<template>
  <div class="scaffold">
    <h4>已提供数据与方法</h4>
    <p>{{ summary }}</p>
    <pre><code>{{ codeHint }}</code></pre>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  summary: string
  codeHint: string
}>()
</script>

<style scoped>
.scaffold {
  margin-top: 16px;
  padding: 16px;
  border: 1px dashed #94a3b8;
  border-radius: 16px;
  background: #f8fafc;
}

h4,
p {
  margin: 0;
}

p {
  margin-top: 8px;
  line-height: 1.8;
  color: #64748b;
}

pre {
  margin: 14px 0 0;
  padding: 14px;
  overflow: auto;
  border-radius: 14px;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 13px;
}
</style>
