<template>
  <section class="panel">
    <h4>统计面板</h4>
    <p>本周完成 6 道练习，正确率 92%。</p>
    <p>可以继续补充图表、列表或进度信息。</p>
  </section>
</template>

<style scoped>
.panel {
  padding: 18px;
  border: 1px dashed #93c5fd;
  border-radius: 18px;
  background: #f8fbff;
}

h4,
p {
  margin: 0;
}

p + p,
h4 + p {
  margin-top: 8px;
}

p {
  color: #64748b;
}
</style>
