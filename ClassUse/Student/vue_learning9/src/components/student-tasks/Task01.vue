<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>投票项目的核心不是样式，而是点击某一项后只修改这一项的票数，再让最高票结果自动刷新。</p>
    </div>
    <div class="vote-layout">
      <section class="list-pane">
        <h3>话题列表区</h3>
        <p class="preview-note">话题数组已经提供好，学生先完成 v-for 列表渲染，再处理点击加票。</p>
        <article class="topic-card">
          <div>
            <h4>食堂是否增加夜宵窗口？</h4>
            <p>当前票数：12</p>
          </div>
          <span class="vote-btn">投票 +1</span>
        </article>
        <article class="topic-card">
          <div>
            <h4>图书馆周末是否延长开放？</h4>
            <p>当前票数：18</p>
          </div>
          <span class="vote-btn">投票 +1</span>
        </article>
      </section>

      <section class="result-pane">
        <h3>结果区</h3>
        <div class="result-card">
          <p class="tag">当前最高票</p>
          <h4>图书馆周末是否延长开放？</h4>
          <p>18 票</p>
        </div>
      </section>
    </div>
    <TaskScaffold summary="先完成话题列表和点击加票，再用 computed 统一计算最高票项。这里最关键的是区分原始数据和结果数据。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const topicList = [
  { id: 1, title: '食堂是否增加夜宵窗口？', votes: 12 },
  { id: 2, title: '图书馆周末是否延长开放？', votes: 18 },
  { id: 3, title: '操场是否增加夜间照明？', votes: 9 },
] as const

const todoText = `已学知识点提示：
1. topicList 已经提供，先不要自己重新设计字段。
2. 点击投票时，本质上是修改数组中某一项的 votes。
3. 最高票话题不是原始数据，适合交给 computed 统一计算。

可先思考：
- 什么是原始数据？topicList
- 什么是结果数据？最高票话题`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.vote-layout { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 14px; }
.list-pane, .result-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .result-pane h3, .preview-note, .topic-card h4, .topic-card p, .result-card h4, .result-card p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.topic-card { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #d1fae5; border-radius: 16px; background: #f0fdf4; }
.topic-card p { margin-top: 8px; color: #64748b; }
.vote-btn { display: inline-flex; align-items: center; justify-content: center; padding: 10px 12px; border-radius: 10px; background: #059669; color: #fff; }
.result-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfdf5 0%, #fff 100%); border: 1px solid #a7f3d0; }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #bbf7d0; color: #166534; font-size: 12px; }
.result-card h4 { margin-top: 12px; }
.result-card p:last-of-type { margin-top: 10px; color: #065f46; }
@media (max-width: 860px) {
  .vote-layout { grid-template-columns: 1fr; }
}
</style>
