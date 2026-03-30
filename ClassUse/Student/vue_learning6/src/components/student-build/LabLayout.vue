<template>
  <section class="layout">
    <header class="hero">
      <slot name="header" />
    </header>
    <div class="middle">
      <aside class="sidebar">
        <slot name="sidebar" />
      </aside>
      <main class="content">
        <slot />
      </main>
    </div>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </section>
</template>

<style scoped>
.layout {
  display: grid;
  gap: 12px;
}

.hero,
.footer,
.sidebar,
.content {
  padding: 16px;
  border-radius: 16px;
}

.hero,
.footer {
  background: #e0f2fe;
  color: #0c4a6e;
}

.middle {
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 12px;
}

.sidebar,
.content {
  border: 1px solid #dbeafe;
  background: #fff;
}

@media (max-width: 720px) {
  .middle {
    grid-template-columns: 1fr;
  }
}
</style>
