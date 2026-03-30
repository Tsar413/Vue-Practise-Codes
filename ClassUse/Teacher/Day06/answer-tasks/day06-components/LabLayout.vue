<template>
  <section class="layout">
    <header><slot name="header" /></header>
    <div class="middle">
      <aside><slot name="sidebar" /></aside>
      <main><slot /></main>
    </div>
    <footer><slot name="footer" /></footer>
  </section>
</template>

<style scoped>
.layout { display: grid; gap: 12px; }
.middle { display: grid; grid-template-columns: 180px minmax(0, 1fr); gap: 12px; }
@media (max-width: 720px) { .middle { grid-template-columns: 1fr; } }
</style>
