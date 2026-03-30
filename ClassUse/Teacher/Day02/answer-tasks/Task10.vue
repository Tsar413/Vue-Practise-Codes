<template>
  <TaskPanel v-bind="meta">
    <div class="form">
      <input v-model="studentName" type="text" placeholder="请输入姓名" />
      <select v-model="selectedCourse">
        <option value="">请选择课程</option>
        <option value="Vue 基础">Vue 基础</option>
        <option value="组件开发">组件开发</option>
        <option value="项目实战">项目实战</option>
      </select>
      <label class="agree">
        <input v-model="agree" type="checkbox" />
        我已阅读报名须知
      </label>
    </div>
    <p :class="['state', { ready: agree && studentName && selectedCourse }]">{{ statusText }}</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'
const meta = taskMetaList[9]!
const studentName = ref('')
const selectedCourse = ref('')
const agree = ref(false)
const statusText = computed(() => {
  if (!studentName.value.trim()) return '请先填写姓名。'
  if (!selectedCourse.value) return '请选择要报名的课程。'
  if (!agree.value) return '请先勾选报名须知。'
  return `${studentName.value}，你已完成“${selectedCourse.value}”的报名信息。`
})
</script>

<style scoped>
.form { display: grid; gap: 12px; }
input, select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.agree { display: flex; gap: 10px; align-items: center; color: #334155; }
.agree input { width: auto; }
.state { margin-top: 14px; padding: 14px; border-radius: 14px; background: #fff7ed; color: #9a3412; }
.ready { background: #dcfce7; color: #166534; }
</style>
