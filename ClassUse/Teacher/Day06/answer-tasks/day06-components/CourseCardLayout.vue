<template>
  <article class="card">
    <header class="head"><slot name="header" /></header>
    <section class="body"><slot /></section>
    <footer class="foot"><slot name="footer" /></footer>
  </article>
</template>

<style scoped>
.card { overflow: hidden; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
.head, .foot { padding: 14px 18px; background: #f8fafc; }
.body { padding: 18px; color: #475569; line-height: 1.8; }
</style>
