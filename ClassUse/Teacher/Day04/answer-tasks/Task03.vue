<template>
  <TaskPanel v-bind="meta">
    <div class="hero">
      <div>
        <p class="eyebrow">当前最受欢迎表情包</p>
        <h3>{{ topMeme.emoji }} {{ topMeme.name }}</h3>
      </div>
      <strong>{{ topMeme.votes }} 票</strong>
    </div>

    <div class="vote-grid">
      <article v-for="item in rankedMemes" :key="item.id" class="vote-card">
        <div class="emoji">{{ item.emoji }}</div>
        <h4>{{ item.name }}</h4>
        <p>当前票数：{{ item.votes }}</p>
        <button @click="vote(item.id)">投一票</button>
      </article>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const memeList = ref([
  { id: 1, name: '摸鱼小猫', emoji: '🐱', votes: 3 },
  { id: 2, name: '早八青蛙', emoji: '🐸', votes: 2 },
  { id: 3, name: '下班小狗', emoji: '🐶', votes: 5 },
  { id: 4, name: '满分海豹', emoji: '🦭', votes: 4 },
])

function vote(id: number) {
  const current = memeList.value.find((item) => item.id === id)
  if (!current) return
  current.votes += 1
}

const rankedMemes = computed(() =>
  [...memeList.value].sort((a, b) => b.votes - a.votes),
)

const topMeme = computed(() => rankedMemes.value[0] ?? { name: '暂无', emoji: '🙂', votes: 0 })
</script>

<style scoped>
.hero { display: flex; justify-content: space-between; gap: 16px; align-items: center; padding: 20px; border-radius: 20px; background: linear-gradient(135deg, #0f766e, #2563eb); color: #fff; }
.eyebrow { margin: 0 0 8px; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; opacity: 0.85; }
.hero h3, .hero strong { margin: 0; }
.vote-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 16px; }
.vote-card { padding: 18px; border: 1px solid #dbe4f0; border-radius: 18px; background: #fff; text-align: center; }
.emoji { font-size: 56px; line-height: 1; }
.vote-card h4, .vote-card p { margin: 10px 0 0; }
button { margin-top: 14px; padding: 10px 16px; border: none; border-radius: 12px; background: #2563eb; color: #fff; cursor: pointer; }
@media (max-width: 720px) {
  .hero { flex-direction: column; align-items: flex-start; }
}
</style>
