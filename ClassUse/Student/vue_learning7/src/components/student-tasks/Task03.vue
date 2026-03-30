<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>记账系统的关键是分清三层数据：输入框状态、记录列表、统计结果。只要这三层清楚，页面就不容易乱。</p>
    </div>
    <div class="account-layout">
      <section class="form-pane">
        <h3>记账录入区</h3>
        <p class="preview-note">预览区是静态态，初始记录和表单对象已经在脚本里准备好，学生只负责接线和统计。</p>
        <!-- TODO 学生练习区：这里补充类型、金额、备注的双向绑定 -->
        <div class="field-row">
          <select>
            <option>收入</option>
          </select>
          <div class="fake-input">200</div>
        </div>
        <div class="fake-textarea">兼职工资</div>
        <div class="submit-btn">新增记录</div>
      </section>

      <section class="list-pane">
        <h3>记录列表区</h3>
        <!-- TODO 学生练习区：这里改成 v-for 渲染记录列表 -->
        <article class="record-item">
          <div>
            <strong>收入 ￥200</strong>
            <p>兼职工资</p>
          </div>
          <span class="fake-delete">删除</span>
        </article>
        <div class="stats-box">
          <!-- TODO 学生练习区：这里显示收入、支出、结余统计 -->
          <p>总收入：￥200</p>
          <p>总支出：￥0</p>
          <p>当前结余：￥200</p>
        </div>
      </section>
    </div>
    <TaskScaffold summary="先完成输入绑定和新增记录，再做删除与统计。列表变化后，让统计结果自动跟着刷新。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const typeOptions = ['收入', '支出'] as const
const recordList = ref([
  {
    id: 1,
    type: '收入',
    amount: 200,
    remark: '兼职工资',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='18' fill='%23dcfce7'/><circle cx='36' cy='36' r='18' fill='%2316a34a'/><text x='36' y='42' text-anchor='middle' font-size='18' fill='white'>入</text></svg>",
  },
  {
    id: 2,
    type: '支出',
    amount: 35,
    remark: '午餐',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='18' fill='%23fee2e2'/><circle cx='36' cy='36' r='18' fill='%23dc2626'/><text x='36' y='42' text-anchor='middle' font-size='18' fill='white'>支</text></svg>",
  },
  {
    id: 3,
    type: '支出',
    amount: 12,
    remark: '公交',
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'><rect width='72' height='72' rx='18' fill='%23dbeafe'/><circle cx='36' cy='36' r='18' fill='%232563eb'/><text x='36' y='42' text-anchor='middle' font-size='18' fill='white'>记</text></svg>",
  },
])

const formState = ref({
  type: '收入' as (typeof typeOptions)[number],
  amount: null as number | null,
  remark: '',
})

const todoText = `已学知识点提示：
1. 类型选项、初始记录列表和表单对象都已提供，先不要自己重新设计字段；记录数据里也带了 image 字段。
2. 点击新增后，把当前输入封装成一条记录放进 recordList。
3. 删除功能本质上是根据 id 从数组里移除一项。
4. 收入、支出、结余都属于结果项，统一交给 computed。

可先思考：
- 临时输入和正式记录有什么区别？
- 统计结果为什么不应该手动维护？`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.account-layout { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 14px; }
.form-pane, .list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.form-pane h3, .list-pane h3, .record-item p, .stats-box p, .preview-note { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.field-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; margin-top: 12px; }
.field-row select, .fake-input, .fake-textarea { width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; background: #fff; }
.fake-textarea { margin-top: 12px; min-height: 74px; color: #475569; }
.submit-btn { margin-top: 12px; padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; }
.record-item { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #dbeafe; border-radius: 14px; background: #f8fbff; }
.record-item strong { color: #0f766e; }
.record-item p { margin-top: 8px; color: #64748b; }
.fake-delete { display: inline-flex; align-items: center; justify-content: center; padding: 8px 12px; border-radius: 10px; background: #dc2626; color: #fff; }
.stats-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.stats-box p + p { margin-top: 8px; }
@media (max-width: 860px) {
  .account-layout { grid-template-columns: 1fr; }
  .field-row { grid-template-columns: 1fr; }
}
</style>
