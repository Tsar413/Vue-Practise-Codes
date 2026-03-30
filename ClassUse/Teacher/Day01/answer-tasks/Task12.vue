<template>
<TaskPanel v-bind="meta">
  <div class="course-list">
    <article v-for="course in courses" :key="course.title" class="course-item">
      <img :src="course.img" :alt="course.title" />
      <div class="body">
        <h4>{{ course.title }}</h4>
        <p>{{ course.desc }}</p>
      </div>
    </article>
  </div>
</TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskPanel from '@/components/common/TaskPanel.vue';
import { taskMetaList } from '@/data/taskMeta';
const meta = taskMetaList[11]!;
const courses = ref([{title:'Vue 入门',desc:'认识响应式数据与插值表达式。',img:'https://dummyimage.com/600x360/0f766e/ffffff&text=Vue+入门'},{title:'指令训练',desc:'练习 v-bind、v-on、v-if 与 v-show。',img:'https://dummyimage.com/600x360/1d4ed8/ffffff&text=指令训练'},{title:'列表渲染',desc:'使用数组和 v-for 输出一组相似结构。',img:'https://dummyimage.com/600x360/b45309/ffffff&text=列表渲染'}])
</script>

<style scoped>
.course-list {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:14px;
}
.course-item {
  overflow:hidden;
  border:1px solid #dbe4f0;
  border-radius:18px;
  background:#fff;
}
img {
  display:block;
  width:100%;
  height:120px;
  object-fit:cover;
}
.body {
  padding:14px;
}
h4,p {
  margin:0;
}
h4 {
  margin-bottom:8px;
}
p {
  color:#64748b;
  line-height:1.7;
}
</style>
