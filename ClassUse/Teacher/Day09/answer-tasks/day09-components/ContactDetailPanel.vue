<template>
  <section class="detail-pane">
    <h3>右侧详情区</h3>
    <div class="detail-card">
      <div class="head">
        <div class="avatar">{{ currentContact.name.slice(0, 1) }}</div>
        <div>
          <h4>{{ currentContact.name }}</h4>
          <p>{{ currentContact.desc }}</p>
        </div>
      </div>
      <div
        v-for="(item, index) in currentContact.messages"
        :key="`${currentContact.id}-${index}`"
        :class="['bubble', index % 2 === 0 ? 'other' : 'self']"
      >
        {{ item }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type Contact = {
  id: number
  name: string
  desc: string
  lastMessage: string
  messages: string[]
}

defineProps<{
  currentContact: Contact
}>()
</script>

<style scoped>
.detail-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.detail-pane h3, .head h4, .head p { margin: 0; }
.detail-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfdf5 0%, #fff 100%); border: 1px solid #a7f3d0; }
.head { display: flex; gap: 12px; align-items: center; }
.avatar { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 12px; background: #bbf7d0; color: #166534; font-weight: 700; }
.head p { margin-top: 6px; color: #64748b; }
.bubble { max-width: 80%; margin-top: 12px; padding: 10px 12px; border-radius: 14px; }
.bubble.other { background: #fff; color: #334155; border: 1px solid #dbe4f0; }
.bubble.self { margin-left: auto; background: #10b981; color: #fff; }
</style>
