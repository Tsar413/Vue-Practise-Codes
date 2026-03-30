<template>
  <section class="list-pane">
    <h3>联系人列表</h3>
    <p class="preview-note">这里已经拆成左侧列表组件。下一步由学生补 props，并在点击时通过 emit 把当前联系人交回父组件。</p>
    <article class="contact-item active">
      <div class="avatar">林</div>
      <div>
        <h4>林小满</h4>
        <p>刚发来一条新消息</p>
      </div>
    </article>
    <article class="contact-item">
      <div class="avatar">周</div>
      <div>
        <h4>周一舟</h4>
        <p>晚上一起去图书馆吗？</p>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
// TODO 学生练习区：
// 1. defineProps 接收 contactList 和 currentContact
// 2. defineEmits 声明 select 事件
</script>

<style scoped>
.list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .preview-note, .contact-item h4, .contact-item p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.contact-item { display: flex; gap: 12px; align-items: center; margin-top: 12px; padding: 12px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fff; }
.contact-item.active { border-color: #10b981; background: #ecfdf5; }
.avatar { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; background: #bbf7d0; color: #166534; font-weight: 700; }
.contact-item p { margin-top: 6px; color: #64748b; }
</style>
