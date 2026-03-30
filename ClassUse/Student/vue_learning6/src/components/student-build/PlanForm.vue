<template>
  <section class="card">
    <h4>学习计划</h4>
    <textarea
      v-model="planText"
      class="box"
      rows="5"
      placeholder="记录本周的学习计划，切换后再回来观察内容是否保留"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const planText = ref('')
</script>

<style scoped>
.card {
  display: grid;
  gap: 10px;
}

h4 {
  margin: 0;
  color: #047857;
}

.box {
  width: 100%;
  padding: 14px;
  border: 1px solid #bbf7d0;
  border-radius: 16px;
  font: inherit;
  resize: vertical;
}
</style>
