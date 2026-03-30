<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>先渲染列表，再补点击加票，最后统计最高票对象。</p>
    </div>
    <div class="vote-shell">
      <div class="top-card">
        <h3>当前最受欢迎表情包</h3>
        <p>摸鱼小猫，3 票</p>
      </div>
      <div class="vote-grid">
        <article class="vote-card">
          <div class="emoji">🐱</div>
          <h4>摸鱼小猫</h4>
          <p>3 票</p>
          <button>投一票</button>
        </article>
        <article class="vote-card">
          <div class="emoji">🐸</div>
          <h4>早八青蛙</h4>
          <p>2 票</p>
          <button>投一票</button>
        </article>
      </div>
    </div>
    <TaskScaffold summary="补全投票数组、加票事件，以及最高票和排行榜的计算逻辑。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[2]!
const todoText = `已学知识点提示：
1. 定义 memeList，每项包含 id、name、emoji、votes。
2. 使用 v-for 渲染投票卡片。
3. 点击“投一票”时让当前项 votes + 1。
4. 使用 computed 计算 topMeme。
5. 如果需要排行榜，可再返回按票数排序后的列表。

可先思考：
- 哪些是原始数据？memeList
- 哪些是点击行为？vote(item.id)
- 哪些是结果数据？topMeme、rankedMemes`

// TODO: 定义 memeList
// TODO: 编写 vote
// TODO: 定义 topMeme

const memeSource = [
  { id: 1, name: '摸鱼小猫', emoji: '🐱', votes: 3 },
  { id: 2, name: '早八青蛙', emoji: '🐸', votes: 2 },
  { id: 3, name: '下班小狗', emoji: '🐶', votes: 5 },
  { id: 4, name: '满分海豹', emoji: '🦭', votes: 4 },
]
</script>

<style scoped>
.workspace { line-height: 1.9; color: #475569; }
.workspace p { margin: 0 0 8px; }
.vote-shell { display: grid; gap: 16px; }
.top-card { padding: 18px; border-radius: 18px; background: linear-gradient(135deg, #0f766e, #2563eb); color: #fff; }
.top-card h3, .top-card p { margin: 0; }
.top-card p { margin-top: 8px; }
.vote-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; }
.vote-card { padding: 18px; border: 1px solid #dbe4f0; border-radius: 18px; background: #fff; text-align: center; }
.emoji { font-size: 52px; line-height: 1; }
.vote-card h4, .vote-card p { margin: 10px 0 0; }
button { margin-top: 14px; padding: 10px 16px; border: none; border-radius: 12px; background: #2563eb; color: #fff; cursor: pointer; }
</style>
