<script lang="ts" setup>
defineProps<{
  image?: string;
  title: string;
  excerpt?: string;
  slug: string;
}>();
</script>

<template>
  <div class="col-span-1 shadow-lg">
    <div class="relative">
      <img v-if="image" :src="image" alt="Blog thumbnail" />
    </div>
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
      <div v-if="excerpt" v-html="excerpt" class="text-sm mb-3"></div>
      <NuxtLink :to="`/${slug}`">Read more</NuxtLink>
    </div>
  </div>
</template>
