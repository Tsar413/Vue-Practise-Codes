<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>值日安排板的重点不是把卡片做漂亮，而是先分清“值日组数组”“当前组状态”“完成统计”这三层数据。</p>
    </div>
    <div class="duty-layout">
      <section class="list-pane">
        <h3>值日列表区</h3>
        <p class="preview-note">值日数组已经提供好，学生先完成 v-for 列表渲染，再处理点击切换当前组和动态高亮。</p>
        <article class="group-card active">
          <div>
            <h4>第一组</h4>
            <p>成员：张宇、林可、陈言</p>
          </div>
          <span class="state-chip done">已完成</span>
        </article>
        <article class="group-card">
          <div>
            <h4>第二组</h4>
            <p>成员：周晨、吴佳、赵宁</p>
          </div>
          <span class="state-chip">待完成</span>
        </article>
      </section>

      <section class="result-pane">
        <h3>当前安排与统计区</h3>
        <div class="result-card">
          <p class="tag">当前值日组</p>
          <h4>第一组</h4>
          <p>负责：教室地面清洁与黑板整理</p>
        </div>
        <div class="stats-grid">
          <article>
            <span>已完成</span>
            <strong>2 组</strong>
          </article>
          <article>
            <span>未完成</span>
            <strong>1 组</strong>
          </article>
        </div>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!

// 步骤 1：先保留值日组原始数组，每一项都要有 id、groupName、members、task、done。
const dutyGroups = [
  { id: 1, groupName: '第一组', members: ['张宇', '林可', '陈言'], task: '教室地面清洁与黑板整理', done: true },
  { id: 2, groupName: '第二组', members: ['周晨', '吴佳', '赵宁'], task: '讲台整理与门窗检查', done: false },
  { id: 3, groupName: '第三组', members: ['许川', '沈悦', '何安'], task: '桌椅摆放与垃圾分类', done: true },
] as const

// 步骤 2：定义 currentId，表示当前选中的值日组。
const currentId = 1

// 步骤 3：先在模板里用 v-for 渲染值日列表，再通过 :class 让当前组高亮。
// 步骤 4：点击某一组时，更新 currentId，并在右侧显示当前组的任务内容。
// 步骤 5：使用 computed 统计已完成组数和未完成组数，不要手动维护统计结果。

void dutyGroups
void currentId
</script>

<style scoped>
.workspace { margin-bottom: 18px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.duty-layout { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 14px; }
.list-pane, .result-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .result-pane h3, .preview-note, .group-card h4, .group-card p, .result-card h4, .result-card p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.group-card { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #dbe4f0; border-radius: 16px; background: #fff; }
.group-card.active { border-color: #0f766e; background: #f0fdfa; }
.group-card p { margin-top: 8px; color: #64748b; }
.state-chip { display: inline-flex; align-items: center; justify-content: center; padding: 8px 12px; border-radius: 10px; background: #e2e8f0; color: #334155; }
.state-chip.done { background: #059669; color: #fff; }
.result-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfeff 0%, #fff 100%); border: 1px solid #99f6e4; }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #bbf7d0; color: #166534; font-size: 12px; }
.result-card h4 { margin-top: 12px; }
.result-card p:last-of-type { margin-top: 10px; color: #0f766e; }
.stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 12px; }
.stats-grid article { padding: 14px; border-radius: 16px; background: #f8fafc; border: 1px solid #dbe4f0; }
.stats-grid span { display: block; color: #64748b; font-size: 13px; }
.stats-grid strong { display: block; margin-top: 8px; font-size: 24px; color: #0f172a; }
@media (max-width: 860px) {
  .duty-layout { grid-template-columns: 1fr; }
}
</style>
