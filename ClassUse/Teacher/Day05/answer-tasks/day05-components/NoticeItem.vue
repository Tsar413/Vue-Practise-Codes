<template>
  <article :class="['notice', { unread: !isRead }]">
    <div>
      <h4>{{ title }}</h4>
      <p>{{ sender }} · {{ time }}</p>
    </div>
    <button :disabled="isRead" @click="$emit('mark-read', id)">
      {{ isRead ? '已读' : '标记已读' }}
    </button>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  id: number
  title: string
  sender: string
  time: string
  isRead: boolean
}>()

defineEmits<{
  'mark-read': [id: number]
}>()
</script>

<style scoped>
.notice { display: grid; grid-template-columns: 1fr auto; gap: 12px; align-items: center; padding: 18px; border: 1px solid #e5e7eb; border-radius: 18px; background: #fff; }
.notice.unread { border-color: #fdba74; background: #fff7ed; }
.notice h4, .notice p { margin: 0; }
.notice p { margin-top: 8px; color: #64748b; }
button { padding: 10px 14px; border: none; border-radius: 12px; background: #b45309; color: #fff; cursor: pointer; }
button:disabled { background: #94a3b8; cursor: not-allowed; }
@media (max-width: 720px) {
  .notice { grid-template-columns: 1fr; }
}
</style>
