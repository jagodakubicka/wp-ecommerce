<template>
  <div>
    <MenuTop />
    <NuxtPage />
    <PageFooter />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap');

:root {
  --brand-font: 'Oswald', sans-serif;
  --regular-font: 'Noto Sans JP', sans-serif;
  --primary-color: #bf2222b4;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  background-color: rgba(29, 29, 29, 1);
  color: white;
  font-family: var(--regular-font);
}
.container {
  @apply mx-auto max-w-5xl px-10 sm:px-4;
}
.font-brand {
  font-family: var(--brand-font);
}
</style>
