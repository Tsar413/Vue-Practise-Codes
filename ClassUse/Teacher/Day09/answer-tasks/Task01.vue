<template>
  <TaskPanel v-bind="meta">
    <div class="vote-layout">
      <section class="list-pane">
        <h3>话题列表区</h3>
        <article v-for="item in topicList" :key="item.id" class="topic-card">
          <div>
            <h4>{{ item.title }}</h4>
            <p>当前票数：{{ item.votes }}</p>
          </div>
          <button @click="vote(item.id)">投票 +1</button>
        </article>
      </section>

      <section class="result-pane">
        <h3>结果区</h3>
        <div class="result-card">
          <p class="tag">当前最高票</p>
          <h4>{{ topTopic.title }}</h4>
          <p>{{ topTopic.votes }} 票</p>
        </div>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[0]!
const topicList = ref([
  { id: 1, title: '食堂是否增加夜宵窗口？', votes: 12 },
  { id: 2, title: '图书馆周末是否延长开放？', votes: 18 },
  { id: 3, title: '操场是否增加夜间照明？', votes: 9 },
])

function vote(id: number) {
  const target = topicList.value.find((item) => item.id === id)
  if (target) target.votes += 1
}

const topTopic = computed(() =>
  topicList.value.reduce((max, item) => (item.votes > max.votes ? item : max), topicList.value[0]!),
)
</script>

<style scoped>
.vote-layout { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 14px; }
.list-pane, .result-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .result-pane h3, .topic-card h4, .topic-card p, .result-card h4, .result-card p { margin: 0; }
.topic-card { display: flex; justify-content: space-between; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #d1fae5; border-radius: 16px; background: #f0fdf4; }
.topic-card p { margin-top: 8px; color: #64748b; }
.topic-card button { padding: 10px 12px; border: none; border-radius: 10px; background: #059669; color: #fff; cursor: pointer; }
.result-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfdf5 0%, #fff 100%); border: 1px solid #a7f3d0; }
.tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #bbf7d0; color: #166534; font-size: 12px; }
.result-card h4 { margin-top: 12px; }
.result-card p:last-of-type { margin-top: 10px; color: #065f46; }
@media (max-width: 860px) {
  .vote-layout { grid-template-columns: 1fr; }
}
</style>
