<script lang="ts" setup>
const { data: categories } = await useWpApi().getCategories<any>(); //iterface instead of any
</script>

<template>
  <PageHeader title="category index header" />
  <section class="container py-10">
    <div class="flex flex-wrap gap-5">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/categories/${category.slug}`"
        class="block py-2 px-4 bg-gray-300 rounded hover:bg-gray-400"
        >#{{ category.name }}</NuxtLink
      >
    </div>
  </section>
</template>
