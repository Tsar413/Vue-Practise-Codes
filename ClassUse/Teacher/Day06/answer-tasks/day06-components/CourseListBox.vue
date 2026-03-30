<template>
  <div class="list">
    <slot
      v-for="(course, index) in courseList"
      :key="course.title"
      :course="course"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
const courseList = [
  { title: 'Vue 插槽', teacher: '李老师' },
  { title: '动态组件', teacher: '陈老师' },
  { title: 'KeepAlive', teacher: '周老师' },
]
</script>

<style scoped>
.list { display: grid; gap: 12px; }
</style>
