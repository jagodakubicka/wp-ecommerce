<script lang="ts" setup>
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
const { data: posts } = await useWpApi().getPosts<any>(); //interface for post instead of any

const text = ref<HTMLElement | null>(null);
const circle = ref<HTMLElement | null>(null);
const scrollPosition = ref(0);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const moveDistance = Math.min(scrollY * 0.5, 100);
  const opacity = Math.max(1 - scrollY / 300, 0);

  if (text.value) {
    text.value.style.transform = `translateY(-${moveDistance}px)`;
  }

  if (circle.value) {
    circle.value.style.opacity = opacity.toFixed(2);
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <main>
    <section
      class="hero bg-gray-100 py-10 w-full h-[100vh] flex justify-center items-center overflow-x-hidden">
      <div
        ref="circle"
        class="hero-circle absolute z-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] bg-primary rounded-full">
        <p
          class="greeting whitespace-nowrap z-10 font-bold text-light text-center mt-8 text-2xl">
          こんにちは
        </p>
      </div>
      <h1
        ref="text"
        id="hero-header"
        class="font-brand absolute whitespace-nowrap z-9 text-4xl sm:text-7xl text-light">
        Japan Journeys
      </h1>
      <a
        class="hero-link z-0 flex flex-col justify-center items-center text-light"
        href="#about">
        <div
          class="hero-link__circle w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center">
          <font-awesome :icon="faArrowDownLong" />
        </div>
        <p class="font-brand">explore</p>
      </a>
    </section>
    <section class="container mt-20">
      <h1 class="text-center p-6 text-4xl font-brand">Featured Posts</h1>
      <div class="grid sm:grid-cols-3 gap-5 p-4">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :title="post.title.rendered"
          :image="post._embedded['wp:featuredmedia'][0]?.source_url"
          :excerpt="post.excerpt.rendered"
          :slug="post.slug" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  background-image: url(../assets/img/hero-img.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-image: fill 1
    linear-gradient(0deg, rgba(29, 29, 29, 1) 0%, rgba(48, 48, 87, 0) 50%);
}
.hero-circle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-link {
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.hero h1 {
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 1);
}

@media (min-width: 678px) {
  .hero {
    background-position: center;
  }

  .hero-link {
    bottom: 5%;
  }
}
</style>
