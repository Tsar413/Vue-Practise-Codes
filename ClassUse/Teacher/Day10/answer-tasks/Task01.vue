<template>
  <section class="task-page">
    <header class="page-head">
      <h2>第一题答案：教室值日安排板</h2>
      <p>完整实现列表渲染、当前组切换、完成状态显示和统计结果。</p>
    </header>

    <div class="duty-layout">
      <section class="list-pane">
        <article
          v-for="item in dutyGroups"
          :key="item.id"
          :class="['group-card', { active: currentId === item.id }]"
          @click="currentId = item.id"
        >
          <div>
            <h3>{{ item.groupName }}</h3>
            <p>成员：{{ item.members.join('、') }}</p>
            <p>任务：{{ item.task }}</p>
          </div>
          <span :class="['state-chip', { done: item.done }]">
            {{ item.done ? '已完成' : '待完成' }}
          </span>
        </article>
      </section>

      <section class="result-pane">
        <div class="result-card">
          <p class="tag">当前值日组</p>
          <h3>{{ currentGroup.groupName }}</h3>
          <p>任务：{{ currentGroup.task }}</p>
          <p>成员：{{ currentGroup.members.join('、') }}</p>
        </div>

        <div class="stats-grid">
          <article>
            <span>已完成</span>
            <strong>{{ completedCount }} 组</strong>
          </article>
          <article>
            <span>未完成</span>
            <strong>{{ pendingCount }} 组</strong>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type DutyGroup = {
  id: number
  groupName: string
  members: string[]
  task: string
  done: boolean
}

const dutyGroups = ref<DutyGroup[]>([
  { id: 1, groupName: '第一组', members: ['张宇', '林可', '陈言'], task: '教室地面清洁与黑板整理', done: true },
  { id: 2, groupName: '第二组', members: ['周晨', '吴佳', '赵宁'], task: '讲台整理与门窗检查', done: false },
  { id: 3, groupName: '第三组', members: ['许川', '沈悦', '何安'], task: '桌椅摆放与垃圾分类', done: true },
])

const currentId = ref(1)

const currentGroup = computed(
  () => dutyGroups.value.find((item) => item.id === currentId.value) ?? dutyGroups.value[0]!,
)

const completedCount = computed(
  () => dutyGroups.value.filter((item) => item.done).length,
)

const pendingCount = computed(
  () => dutyGroups.value.filter((item) => !item.done).length,
)
</script>

<style scoped>
.task-page { display: grid; gap: 18px; }
.page-head h2, .page-head p, .group-card h3, .group-card p, .result-card h3, .result-card p { margin: 0; }
.page-head p { margin-top: 8px; color: #64748b; }
.duty-layout { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 16px; }
.list-pane, .result-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.group-card { display: flex; justify-content: space-between; gap: 12px; align-items: flex-start; margin-top: 12px; padding: 14px; border: 1px solid #dbe4f0; border-radius: 16px; cursor: pointer; background: #fff; }
.group-card.active { border-color: #0f766e; background: #f0fdfa; }
.group-card p { margin-top: 8px; color: #64748b; line-height: 1.7; }
.state-chip { padding: 8px 12px; border-radius: 10px; background: #e2e8f0; color: #334155; }
.state-chip.done { background: #059669; color: #fff; }
.result-card { padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfeff 0%, #fff 100%); border: 1px solid #99f6e4; }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #ccfbf1; color: #115e59; }
.result-card h3 { margin-top: 12px; }
.result-card p { margin-top: 10px; color: #475569; line-height: 1.7; }
.stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 14px; }
.stats-grid article { padding: 14px; border-radius: 16px; border: 1px solid #dbe4f0; background: #f8fafc; }
.stats-grid span { display: block; color: #64748b; font-size: 13px; }
.stats-grid strong { display: block; margin-top: 8px; font-size: 24px; }
@media (max-width: 860px) {
  .duty-layout { grid-template-columns: 1fr; }
}
</style>
