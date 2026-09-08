<template>
  <router-view />
</template>

<script setup>
</script>

<style>
/* Delivery-specific theme (dark-only landing). No sidebar, no auth, no
   toasts — those moved to my.lisaos.dev/delivery when the tenant UI
   split out. This shell is marketing-only. */
:root {
  --app-background: #1e1e1e;
  --app-foreground: #d4d4d4;
  --app-muted: #6b7280;
  --app-accent: #FF2D55;
  --app-accent-fg: #ffffff;
  --app-border: #3c3c3c;
  --app-surface: #282828;
  --app-success: #34C759;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  background: var(--app-background);
  color: var(--app-foreground);
  font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a { color: var(--app-accent); text-decoration: none; }
</style>
