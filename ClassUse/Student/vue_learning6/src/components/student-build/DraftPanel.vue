<template>
  <section class="panel">
    <h4>草稿面板</h4>
    <textarea
      v-model="draftText"
      class="box"
      rows="5"
      placeholder="切回统计面板后，再回来这里内容仍应保留"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const draftText = ref('')
</script>

<style scoped>
.panel {
  display: grid;
  gap: 10px;
  padding: 18px;
  border: 1px solid #bae6fd;
  border-radius: 18px;
  background: #fff;
}

h4 {
  margin: 0;
}

.box {
  width: 100%;
  padding: 14px;
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  font: inherit;
  resize: vertical;
}
</style>
