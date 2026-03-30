<template>
  <section class="list-pane">
    <h3>列表页预览</h3>
    <p class="preview-note">这里已经拆成独立列表页组件。下一步由学生补 props，并把点击事件通过 emit 交回父组件。</p>
    <!-- TODO 学生练习区：给组件补 props，并把下面静态结构改成 v-for -->
    <article class="hot-item">
      <span class="rank">1</span>
      <div>
        <h4>春季校园歌会报名开启</h4>
        <p>热度 9281</p>
      </div>
      <span class="fake-button">查看详情</span>
    </article>
    <article class="hot-item">
      <span class="rank">2</span>
      <div>
        <h4>图书馆延长开放时间</h4>
        <p>热度 7015</p>
      </div>
      <span class="fake-button">查看详情</span>
    </article>
  </section>
</template>

<script setup lang="ts">
// TODO 学生练习区：
// 1. defineProps 接收 hotList
// 2. defineEmits 声明 select 事件
</script>

<style scoped>
.list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .preview-note, .hot-item h4, .hot-item p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.hot-item { display: grid; grid-template-columns: 44px 1fr auto; gap: 14px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fffaf5; }
.rank { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 12px; background: #fed7aa; color: #9a3412; font-weight: 700; }
.hot-item p { margin-top: 6px; color: #64748b; }
.fake-button { display: inline-flex; align-items: center; justify-content: center; padding: 9px 12px; border-radius: 10px; background: #ea580c; color: #fff; }
@media (max-width: 720px) {
  .hot-item { grid-template-columns: 1fr; }
}
</style>
