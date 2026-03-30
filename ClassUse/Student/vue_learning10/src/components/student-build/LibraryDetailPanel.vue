<template>
  <section class="detail-pane">
    <h3>图书详情组件</h3>
    <p class="preview-note">这里是右侧子组件。任务只有一个：接收父组件传来的 currentBook，并把图书标题、作者、库存和简介渲染出来。</p>

    <div class="detail-card">
      <div class="detail-head">
        <div class="cover">Vue</div>
        <div>
          <h4>Vue 3 组件化开发</h4>
          <p>前端开发 / 作者：李老师</p>
        </div>
      </div>

      <div class="info-grid">
        <div>
          <span>馆藏位置</span>
          <strong>A-203</strong>
        </div>
        <div>
          <span>当前库存</span>
          <strong>12 本</strong>
        </div>
      </div>

      <div class="intro-box">
        <p>本书简介区域适合练习 <code>v-show</code>，并根据当前图书切换显示内容。</p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
// 步骤 1：先用 defineProps 接收 currentBook。
// 步骤 2：模板中的书名、作者、库存、馆藏位置、简介都要改成读取 currentBook。
// 步骤 3：如果 currentBook 为空，要先用 v-if 做保护，再渲染详情内容。
// 步骤 4：当前题目只要求父传子渲染，不需要切页，也不需要 back 事件。
// 步骤 5：完成后检查右侧内容是否会随着父组件 currentBook 变化而同步更新。
</script>

<style scoped>
.detail-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.detail-pane h3, .preview-note, .detail-head h4, .detail-head p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.detail-card { margin-top: 12px; padding: 18px; border-radius: 18px; background: linear-gradient(180deg, #ecfeff 0%, #fff 100%); border: 1px solid #99f6e4; }
.detail-head { display: flex; gap: 14px; align-items: center; }
.cover { display: grid; place-items: center; width: 70px; height: 86px; border-radius: 16px; background: linear-gradient(180deg, #0f766e, #115e59); color: #fff; font-weight: 700; }
.detail-head p { margin-top: 6px; color: #64748b; }
.info-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-top: 14px; }
.info-grid div { padding: 12px; border-radius: 14px; background: #fff; border: 1px solid #dbe4f0; }
.info-grid span, .intro-box p { color: #64748b; }
.info-grid span { display: block; font-size: 13px; }
.info-grid strong { display: block; margin-top: 6px; color: #0f172a; }
.intro-box { margin-top: 14px; padding: 14px; border-radius: 14px; background: #fff; border: 1px dashed #94a3b8; }
.intro-box p { margin: 0; line-height: 1.8; }
@media (max-width: 700px) {
  .info-grid { grid-template-columns: 1fr; }
}
</style>
