<template>
  <section class="list-pane">
    <h3>图书列表组件</h3>
    <p class="preview-note">这里是左侧子组件。任务很简单：接收父组件传来的图书数组，循环渲染列表，并在点击某一本书时把当前图书传回父组件。</p>

    <article class="book-item active">
      <div class="cover">Vue</div>
      <div class="meta">
        <h4>Vue 3 组件化开发</h4>
        <p>前端开发 / 库存 12 本</p>
      </div>
    </article>

    <article class="book-item">
      <div class="cover">JS</div>
      <div class="meta">
        <h4>JavaScript 进阶实践</h4>
        <p>编程语言 / 库存 2 本</p>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
// 步骤 1：先用 defineProps 接收 books。
// 步骤 2：再用 defineEmits 声明 select 事件。
// 步骤 3：用 v-for 把 books 渲染出来，每一项显示书名、分类和库存。
// 步骤 4：点击某一本书时，调用 emit('select', item)，把当前图书交给父组件。
// 步骤 5：如果父组件还传了 currentBook，可以用 :class 高亮当前选中项。
</script>

<style scoped>
.list-pane { padding: 18px; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.list-pane h3, .preview-note, .meta h4, .meta p { margin: 0; }
.preview-note { margin-top: 10px; line-height: 1.7; color: #64748b; font-size: 14px; }
.book-item { display: grid; grid-template-columns: 60px 1fr; gap: 12px; align-items: center; margin-top: 12px; padding: 14px; border: 1px solid #e2e8f0; border-radius: 16px; background: #fff; }
.book-item.active { border-color: #0f766e; background: #f0fdfa; }
.cover { display: grid; place-items: center; width: 60px; height: 72px; border-radius: 14px; background: linear-gradient(180deg, #0f766e, #115e59); color: #fff; font-weight: 700; }
.meta p { margin-top: 6px; color: #64748b; }
</style>
