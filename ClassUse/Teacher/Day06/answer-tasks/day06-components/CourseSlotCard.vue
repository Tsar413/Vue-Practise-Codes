<template>
  <article class="card">
    <header><slot name="header" /></header>
    <section class="body"><slot /></section>
    <footer><slot name="footer" /></footer>
  </article>
</template>

<style scoped>
.card { overflow: hidden; border: 1px solid #fcd34d; border-radius: 20px; background: #fffef7; }
header, footer { padding: 14px 18px; background: #fef3c7; }
.body { padding: 18px; color: #475569; line-height: 1.8; }
footer { display: flex; gap: 10px; }
</style>
