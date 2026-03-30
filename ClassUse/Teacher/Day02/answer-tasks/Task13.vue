<template>
  <TaskPanel v-bind="meta">
    <div class="form">
      <input v-model="studentName" type="text" placeholder="请输入姓名" />
      <select v-model="timeSlot">
        <option value="">请选择时段</option>
        <option value="上午第一节">上午第一节</option>
        <option value="下午第二节">下午第二节</option>
        <option value="晚自习">晚自习</option>
      </select>
      <label class="row">
        <input v-model="hasDevice" type="checkbox" />
        我会自带耳机和鼠标
      </label>
    </div>
    <p class="status">{{ reservationText }}</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[12]!
const studentName = ref('')
const timeSlot = ref('')
const hasDevice = ref(false)
const reservationText = computed(() => {
  if (!studentName.value.trim()) return '请先填写预约人姓名。'
  if (!timeSlot.value) return '请选择机房预约时段。'
  if (!hasDevice.value) return '请确认是否携带常用设备。'
  return `${studentName.value} 已预约 ${timeSlot.value} 机房座位，可正常签到。`
})
</script>

<style scoped>
.form { display: grid; gap: 12px; }
input, select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.row { display: flex; gap: 10px; align-items: center; color: #334155; }
.row input { width: auto; }
.status { margin-top: 14px; padding: 14px; border-radius: 14px; background: #eff6ff; color: #1d4ed8; }
</style>
