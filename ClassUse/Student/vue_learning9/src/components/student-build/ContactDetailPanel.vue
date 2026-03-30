<template>
  <section class="detail-pane">
    <h3>右侧详情区</h3>
    <p class="preview-note">这里已经拆成右侧详情组件。下一步由学生补 props，让详情内容根据当前联系人变化。</p>
    <div class="detail-card">
      <div class="head">
        <div class="avatar">林</div>
        <div>
          <h4>林小满</h4>
          <p>摄影社 / 在线</p>
        </div>
      </div>
      <div class="bubble other">今天社团活动记得来哦。</div>
      <div class="bubble self">收到，晚上见。</div>
    </div>
  </section>
</template>

<script setup lang="ts">
// TODO 学生练习区：
// 1. defineProps 接收 currentContact
</script>

<style scoped>
.detail-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.detail-pane h3, .preview-note, .head h4, .head p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.detail-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfdf5 0%, #fff 100%); border: 1px solid #a7f3d0; }
.head { display: flex; gap: 12px; align-items: center; }
.avatar { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 12px; background: #bbf7d0; color: #166534; font-weight: 700; }
.head p { margin-top: 6px; color: #64748b; }
.bubble { max-width: 80%; margin-top: 12px; padding: 10px 12px; border-radius: 14px; }
.bubble.other { background: #fff; color: #334155; border: 1px solid #dbe4f0; }
.bubble.self { margin-left: auto; background: #10b981; color: #fff; }
</style>
