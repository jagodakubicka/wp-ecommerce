<script lang="ts" setup>
import { useRoute } from 'vue-router';
const route = useRoute();

//get category id
const { data: categories } = await useWpApi().get<any>(
  `categories?slug=${route.params.slug}`
);
// get posts related to category id

const { data: posts } = await useWpApi().getPosts<any>(categories.value[0].id);
</script>

<template>
  <div class="mt-50">
    <PageHeader :title="categories[0].name"></PageHeader>
  </div>
  <section class="container py-12">
    <div class="grid sm:grid-cols-3 gap-5">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :title="post.title.rendered"
        :image="post._embedded['wp:featuredmedia'][0]?.source_url"
        :excerpt="post.excerpt.rendered"
        :slug="post.slug" />
    </div>
  </section>
</template>
