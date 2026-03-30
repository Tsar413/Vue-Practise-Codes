<template>
  <section class="panel-box">
    <h3>默认插槽信息面板</h3>
    <div class="body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.panel-box { padding: 18px; border: 1px solid #bae6fd; border-radius: 18px; background: #f0f9ff; }
h3, .body :deep(p) { margin: 0; }
.body { margin-top: 10px; color: #475569; line-height: 1.8; }
</style>
