<template>
  <section class="dialog">
    <header><slot name="title" /></header>
    <main><slot /></main>
    <footer><slot name="actions" /></footer>
  </section>
</template>

<style scoped>
.dialog { overflow: hidden; border: 1px solid #dbe4f0; border-radius: 20px; background: #fff; }
header, footer { padding: 14px 18px; background: #f8fafc; }
main { padding: 18px; color: #475569; line-height: 1.8; }
footer { display: flex; justify-content: flex-end; gap: 10px; }
</style>
