<script lang="ts" setup>
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="container">
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>
