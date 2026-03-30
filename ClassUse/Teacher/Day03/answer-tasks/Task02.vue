<template>
  <TaskPanel v-bind="meta">
    <div class="form">
      <input v-model.trim="subject" type="text" placeholder="请输入科目" />
      <input v-model.number="score" type="number" placeholder="请输入分数" />
      <button @click="addScore">添加</button>
    </div>
    <p class="tip">{{ scoreTip }}</p>
    <div class="panel">
      <div v-if="scoreList.length === 0" class="empty">暂无数据</div>
      <div v-else class="list">
        <article v-for="item in scoreList" :key="item.id" class="item">
          <span>{{ item.subject }}</span>
          <strong :class="{ fail: item.score < 60 }">{{ item.score }}</strong>
          <button class="danger" @click="removeScore(item.id)">删除</button>
        </article>
      </div>
    </div>
    <p class="result">总分：{{ totalScore }}</p>
    <p class="result">平均分：{{ averageScore }}</p>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const subject = ref('')
const score = ref<number | null>(null)
const scoreTip = ref('请填写科目和分数。')
const scoreList = ref([
  { id: 1, subject: 'HTML', score: 88 },
  { id: 2, subject: 'Vue', score: 56 },
  { id: 3, subject: 'JavaScript', score: 92 },
])

watch([subject, score, scoreList], ([newSubject, newScore]) => {
  if (newSubject && newScore !== null) {
    scoreTip.value = '信息完整，可以添加成绩。'
    return
  }

  scoreTip.value = scoreList.value.length === 0 ? '当前暂无成绩，请先录入。' : '请填写科目和分数。'
}, { deep: true })

function addScore() {
  if (!subject.value || score.value === null) return
  scoreList.value.push({
    id: Date.now(),
    subject: subject.value,
    score: Number(score.value),
  })
  subject.value = ''
  score.value = null
}

function removeScore(id: number) {
  scoreList.value = scoreList.value.filter((item) => item.id !== id)
}

const totalScore = computed(() =>
  scoreList.value.reduce((sum, item) => sum + item.score, 0),
)

const averageScore = computed(() =>
  scoreList.value.length ? (totalScore.value / scoreList.value.length).toFixed(1) : '0.0',
)
</script>

<style scoped>
.form { display: grid; grid-template-columns: 1fr 140px auto; gap: 12px; }
input { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 12px; font: inherit; box-sizing: border-box; }
button { padding: 10px 16px; border: none; border-radius: 12px; background: #db2777; color: #fff; }
.tip { margin-top: 12px; color: #475569; }
.panel { margin-top: 12px; padding: 14px; border-radius: 14px; background: #f8fafc; }
.list { display: grid; gap: 12px; }
.item { display: grid; grid-template-columns: 1fr auto auto; gap: 12px; align-items: center; padding: 12px 14px; border-radius: 14px; background: #fff; }
.fail { color: #dc2626; }
.danger { background: #ef4444; }
.empty { padding: 14px; border-radius: 14px; background: #fef2f2; color: #b91c1c; }
.result { margin-top: 12px; font-weight: 700; }
@media (max-width: 720px) {
  .form, .item { grid-template-columns: 1fr; }
}
</style>
