<template>
  <section class="detail-pane">
    <h3>详情页预览</h3>
    <p class="preview-note">这里已经拆成独立详情页组件。下一步由学生补 props，并通过 emit 通知父组件返回列表页。</p>
    <!-- TODO 学生练习区：给组件补 props 和 back 事件 -->
    <div class="detail-card">
      <p class="detail-tag">当前选中热搜</p>
      <h4>春季校园歌会报名开启</h4>
      <p>本周五晚上在操场举行，现已开放班级报名和志愿者招募。</p>
      <span class="back-button">返回列表</span>
    </div>
  </section>
</template>

<script setup lang="ts">
// TODO 学生练习区：
// 1. defineProps 接收 item
// 2. defineEmits 声明 back 事件
</script>

<style scoped>
.detail-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.detail-pane h3, .preview-note, .detail-card h4, .detail-card p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.detail-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #fff7ed 0%, #fff 100%); border: 1px solid #fdba74; }
.detail-tag { display: inline-block; padding: 6px 10px; border-radius: 999px; background: #ffedd5; color: #c2410c; font-size: 12px; }
.detail-card h4 { margin-top: 12px; }
.detail-card p:last-of-type { margin-top: 10px; line-height: 1.8; color: #475569; }
.back-button { display: inline-flex; align-items: center; justify-content: center; margin-top: 14px; padding: 9px 12px; border-radius: 10px; background: #ea580c; color: #fff; }
</style>
