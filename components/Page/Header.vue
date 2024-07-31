<script lang="ts" setup>
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="container header h-[200px] sm:h-[400px] w-full">
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style scoped>
.header {
  background-image: url(../../assets/img/hero-img.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-image: fill 1
    linear-gradient(0deg, rgba(29, 29, 29, 1) 0%, rgba(48, 48, 87, 0) 50%);
}
</style>
