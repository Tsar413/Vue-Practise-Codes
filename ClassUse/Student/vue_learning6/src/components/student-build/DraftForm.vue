<template>
  <section class="card">
    <h4>笔记草稿</h4>
    <textarea
      v-model="draftText"
      class="box"
      rows="5"
      placeholder="先写下临时笔记，切走后再切回观察是否被缓存"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const draftText = ref('')
</script>

<style scoped>
.card {
  display: grid;
  gap: 10px;
}

h4 {
  margin: 0;
  color: #0f766e;
}

.box {
  width: 100%;
  padding: 14px;
  border: 1px solid #99f6e4;
  border-radius: 16px;
  font: inherit;
  resize: vertical;
}
</style>
