<template>
  <section class="list-pane">
    <h3>联系人列表</h3>
    <article
      v-for="item in contactList"
      :key="item.id"
      :class="['contact-item', { active: item.id === currentContact.id }]"
      @click="emit('select', item)"
    >
      <div class="avatar">{{ item.name.slice(0, 1) }}</div>
      <div>
        <h4>{{ item.name }}</h4>
        <p>{{ item.lastMessage }}</p>
      </div>
    </article>
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
  contactList: Contact[]
  currentContact: Contact
}>()

const emit = defineEmits<{
  select: [item: Contact]
}>()
</script>

<style scoped>
.list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .contact-item h4, .contact-item p { margin: 0; }
.contact-item { display: flex; gap: 12px; align-items: center; margin-top: 12px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fff; cursor: pointer; }
.contact-item.active { border-color: #10b981; background: #ecfdf5; }
.avatar { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; background: #bbf7d0; color: #166534; font-weight: 700; }
.contact-item p { margin-top: 6px; color: #64748b; }
</style>
