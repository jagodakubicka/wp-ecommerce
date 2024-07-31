<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{
  title: string;
  subtitle?: string;
  decor?: string;
}>();
</script>

<template>
  <div class="container my-4">
    <p v-if="decor" class="text-center text-primary font-bold text-xl">
      {{ decor }}
    </p>
    <h1 class="text-center p-6 text-4xl font-brand">{{ title }}</h1>
    <p v-if="subtitle" class="text-center text-sm">
      {{ subtitle }}
    </p>
  </div>
</template>

<style></style>
