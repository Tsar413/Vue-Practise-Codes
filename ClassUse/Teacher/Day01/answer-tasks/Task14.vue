<template>
<TaskPanel v-bind="meta">
  <div class="image-card">
    <img :src="cover" alt="课程封面" />
    <p>{{ caption }}</p>
    <button @click="switchCover">切换图片</button>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[13]!;
const cover = ref('https://dummyimage.com/600x360/0f766e/ffffff&text=Vue+基础');
const caption = ref('Vue 基础课程封面');
function switchCover(){cover.value = cover.value.includes('基础') ? 'https://dummyimage.com/600x360/1d4ed8/ffffff&text=组件基础' : 'https://dummyimage.com/600x360/0f766e/ffffff&text=Vue+基础';
caption.value = cover.value.includes('组件基础') ? '组件基础课程封面' : 'Vue 基础课程封面'}
</script>

<style scoped>
.image-card img {
  width:100%;
  max-width:320px;
  border-radius:16px;
  display:block;
}
.image-card p {
  margin:12px 0;
  color:#64748b;
}
button {
  padding:10px 16px;
  border:none;
  border-radius:12px;
  background:#1d4ed8;
  color:#fff;
  cursor:pointer;
}
</style>
