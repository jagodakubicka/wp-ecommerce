<script lang="ts" setup>
import { useRoute } from 'vue-router';
const { params } = useRoute();

const { data: posts } = await useWpApi().getPost<any>(params.slug as string); //any as interface for post
const post = posts.value[0];
</script>

<template>
  <main>
    <section class="header container py-24">
      <div class="post-title text-center mb-3">
        <h1 class="text-3xl sm:text-5xl font-bold">
          {{ post.title.rendered }}
        </h1>
      </div>
      <div class="post-meta text-center flex items-center justify-center gap-3">
        <span>Written by {{ post._embedded['author'][0].name }} </span>
        <span>Published on {{ post.date }}</span>
      </div>

      <div class="post-image w-full relative my-10 m-auto">
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          class="shadow-xl rounded object-cover m-auto"
          alt="Blog Thumb" />
      </div>

      <div class="post-content mt-2">
        <div v-html="post.content.rendered"></div>
      </div>
    </section>
  </main>
</template>

<style>
.post-content h1 {
  @apply mb-2 font-bold text-3xl;
}
.post-content p {
  @apply mb-2;
}

.post-content img {
  @apply mb-4;
}
</style>
