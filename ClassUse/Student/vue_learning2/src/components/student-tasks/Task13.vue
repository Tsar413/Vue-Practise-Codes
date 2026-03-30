<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>在当前组件中完成“机房预约”。</p>
      <p>要求：根据姓名、预约时段和设备状态生成预约提示。</p>
    </div>
    <div class="form">
      <input type="text" placeholder="请输入姓名" />
      <select>
        <option value="">请选择时段</option>
        <option value="上午第一节">上午第一节</option>
        <option value="下午第二节">下午第二节</option>
        <option value="晚自习">晚自习</option>
      </select>
      <label class="row">
        <input type="checkbox" />
        我会自带耳机和鼠标
      </label>
    </div>
    <p class="status"><!-- TODO: 显示 reservationText --></p>
    <TaskScaffold summary="补全三个输入项的绑定，并用计算属性生成预约状态。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[12]!
const todoText = `// TODO: 定义 studentName
// TODO: 定义 timeSlot
// TODO: 定义 hasDevice
// TODO: 定义 reservationText
// TODO: 给三个输入项补 v-model`

// TODO: 定义 studentName
// TODO: 定义 timeSlot
// TODO: 定义 hasDevice
// TODO: 定义 reservationText
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p, .status { margin: 0 0 10px; }
.form { display: grid; gap: 12px; }
input, select { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
.row { display: flex; gap: 10px; align-items: center; color: #334155; }
.row input { width: auto; }
.status { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
</style>
