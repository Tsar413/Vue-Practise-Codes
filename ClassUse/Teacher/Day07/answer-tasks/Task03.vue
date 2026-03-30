<template>
  <TaskPanel v-bind="meta">
    <div class="account-layout">
      <section class="form-pane">
        <h3>记账录入区</h3>
        <div class="field-row">
          <select v-model="type">
            <option value="收入">收入</option>
            <option value="支出">支出</option>
          </select>
          <input v-model.number="amount" type="number" placeholder="请输入金额" />
        </div>
        <textarea v-model.trim="remark" rows="3" placeholder="请输入备注"></textarea>
        <button class="submit-btn" @click="addRecord">新增记录</button>
      </section>

      <section class="list-pane">
        <h3>记录列表区</h3>
        <article v-for="item in recordList" :key="item.id" class="record-item">
          <div>
            <strong :class="{ expense: item.type === '支出' }">{{ item.type }} ￥{{ item.amount }}</strong>
            <p>{{ item.remark }}</p>
          </div>
          <button @click="removeRecord(item.id)">删除</button>
        </article>
        <div class="stats-box">
          <p>总收入：￥{{ incomeTotal }}</p>
          <p>总支出：￥{{ expenseTotal }}</p>
          <p>当前结余：￥{{ balance }}</p>
        </div>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const type = ref<'收入' | '支出'>('收入')
const amount = ref<number | null>(null)
const remark = ref('')
const recordList = ref([
  { id: 1, type: '收入', amount: 200, remark: '兼职工资' },
  { id: 2, type: '支出', amount: 35, remark: '午餐' },
])

function addRecord() {
  if (!amount.value || !remark.value) return
  recordList.value.unshift({
    id: Date.now(),
    type: type.value,
    amount: amount.value,
    remark: remark.value,
  })
  amount.value = null
  remark.value = ''
}

function removeRecord(id: number) {
  recordList.value = recordList.value.filter((item) => item.id !== id)
}

const incomeTotal = computed(() =>
  recordList.value.filter((item) => item.type === '收入').reduce((sum, item) => sum + item.amount, 0),
)
const expenseTotal = computed(() =>
  recordList.value.filter((item) => item.type === '支出').reduce((sum, item) => sum + item.amount, 0),
)
const balance = computed(() => incomeTotal.value - expenseTotal.value)
</script>

<style scoped>
.account-layout { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 14px; }
.form-pane, .list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.form-pane h3, .list-pane h3, .record-item p, .stats-box p { margin: 0; }
.field-row { display: grid; grid-template-columns: 140px 1fr; gap: 12px; margin-top: 12px; }
.field-row select, .field-row input, textarea { width: 100%; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; }
textarea { margin-top: 12px; resize: vertical; }
.submit-btn { margin-top: 12px; padding: 10px 16px; border: none; border-radius: 12px; background: #0f766e; color: #fff; cursor: pointer; }
.record-item { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #dbeafe; border-radius: 14px; background: #f8fbff; }
.record-item strong { color: #0f766e; }
.record-item strong.expense { color: #b91c1c; }
.record-item p { margin-top: 8px; color: #64748b; }
.record-item button { padding: 8px 12px; border: none; border-radius: 10px; background: #dc2626; color: #fff; cursor: pointer; }
.stats-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.stats-box p + p { margin-top: 8px; }
@media (max-width: 860px) {
  .account-layout { grid-template-columns: 1fr; }
  .field-row { grid-template-columns: 1fr; }
}
</style>
