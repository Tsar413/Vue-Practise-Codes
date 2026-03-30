<template>
  <TaskPanel v-bind="meta">
    <div class="chat-layout">
      <section class="messages-pane">
        <h3>消息列表区</h3>
        <div
          v-for="item in messageList"
          :key="item.id"
          :class="['bubble', item.role]"
        >
          {{ item.content }}
        </div>
      </section>

      <section class="input-pane">
        <h3>输入区</h3>
        <textarea v-model.trim="messageText" rows="6" placeholder="请输入消息内容"></textarea>
        <button @click="sendMessage">发送</button>
      </section>
    </div>
  </TaskPanel>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TaskPanel from '@/components/common/TaskPanel.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const messageList = ref([
  { id: 1, role: 'ai', content: '你好，今天想讨论哪个校园话题？' },
  { id: 2, role: 'user', content: '我想看看本周活动安排。' },
])
const messageText = ref('')

function sendMessage() {
  if (!messageText.value) return
  messageList.value.push({
    id: Date.now(),
    role: 'user',
    content: messageText.value,
  })
  messageList.value.push({
    id: Date.now() + 1,
    role: 'ai',
    content: `已收到：${messageText.value}`,
  })
  messageText.value = ''
}
</script>

<style scoped>
.chat-layout { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 14px; }
.messages-pane, .input-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.messages-pane h3, .input-pane h3 { margin: 0; }
.bubble { max-width: 80%; margin-top: 12px; padding: 12px 14px; border-radius: 16px; }
.bubble.ai { background: #f1f5f9; color: #334155; }
.bubble.user { margin-left: auto; background: #10b981; color: #fff; }
textarea { width: 100%; margin-top: 12px; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 14px; font: inherit; resize: vertical; }
button { margin-top: 12px; padding: 10px 14px; border: none; border-radius: 10px; background: #059669; color: #fff; cursor: pointer; }
@media (max-width: 860px) {
  .chat-layout { grid-template-columns: 1fr; }
}
</style>
