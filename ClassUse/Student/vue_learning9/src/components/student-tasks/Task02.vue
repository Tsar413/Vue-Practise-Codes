<template>
  <TaskPanel v-bind="meta">
    <div class="workspace">
      <p>聊天项目的重点不是“像不像聊天软件”，而是分清输入框里的临时内容和消息数组里的正式消息。</p>
    </div>
    <div class="chat-layout">
      <section class="messages-pane">
        <h3>消息列表区</h3>
        <p class="preview-note">消息数组和输入状态都已经准备好。学生要完成列表渲染、发送动作和消息样式区分。</p>
        <div class="bubble ai">你好，今天想讨论哪个校园话题？</div>
        <div class="bubble user">我想看看本周活动安排。</div>
      </section>

      <section class="input-pane">
        <h3>输入区</h3>
        <div class="fake-input">请输入消息内容</div>
        <span class="send-btn">发送</span>
      </section>
    </div>
    <TaskScaffold summary="先完成 messageText 的输入绑定，再处理发送按钮把输入内容追加到 messageList，最后再用 :class 区分用户消息和 AI 消息。" :code-hint="todoText" />
  </TaskPanel>
</template>

<script setup lang="ts">
import TaskPanel from '@/components/common/TaskPanel.vue'
import TaskScaffold from '@/components/common/TaskScaffold.vue'
import { taskMetaList } from '@/data/taskMeta'

const meta = taskMetaList[1]!
const messageList = [
  { id: 1, role: 'ai', content: '你好，今天想讨论哪个校园话题？' },
  { id: 2, role: 'user', content: '我想看看本周活动安排。' },
] as const

const messageText = ''

const todoText = `已学知识点提示：
1. messageText 和 messageList 都已提供，先不要把输入框内容直接当成消息列表。
2. 发送动作本质上是把当前输入内容封装成一条消息对象，再放进数组。
3. role 字段可以帮助你用 :class 区分不同消息气泡样式。

可先思考：
- 哪个是输入状态？messageText
- 哪个是原始数据？messageList`
</script>

<style scoped>
.workspace { margin-bottom: 12px; line-height: 1.9; color: #475569; }
.workspace p { margin: 0; }
.chat-layout { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 14px; }
.messages-pane, .input-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.messages-pane h3, .input-pane h3, .preview-note { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.bubble { max-width: 80%; margin-top: 12px; padding: 12px 14px; border-radius: 16px; }
.bubble.ai { background: #f1f5f9; color: #334155; }
.bubble.user { margin-left: auto; background: #10b981; color: #fff; }
.fake-input { margin-top: 12px; min-height: 120px; padding: 12px 14px; border: 1px solid #cbd5e1; border-radius: 14px; color: #64748b; }
.send-btn { display: inline-flex; align-items: center; justify-content: center; margin-top: 12px; padding: 10px 14px; border-radius: 10px; background: #059669; color: #fff; }
@media (max-width: 860px) {
  .chat-layout { grid-template-columns: 1fr; }
}
</style>
