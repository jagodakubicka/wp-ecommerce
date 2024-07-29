<script lang="ts" setup>
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
const { data: posts } = await useWpApi().getPosts<any>(); //interface for post instead of any
</script>

<template>
  <main>
    <section class="hero bg-gray-100 py-10">
      <div ref="circle" class="hero-circle">
        <p class="greeting">こんにちは</p>
      </div>
      <h1 ref="text" id="hero-header">Japan Journeys</h1>
      <a class="hero-link" href="#about">
        <div class="hero-link__circle">
          <font-awesome :icon="faArrowDownLong" />
        </div>
        <p>explore</p>
      </a>
    </section>
    <section class="container mt-20">
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
  </main>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/hero-img.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  border-image: fill 1
    linear-gradient(0deg, rgba(29, 29, 29, 1) 0%, rgba(48, 48, 87, 0) 50%);
}
.hero-circle {
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 200px;
  background: #bf2222b4;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-link {
  position: absolute;
  z-index: 0;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #fdfdfd;
}
.hero-link__circle {
  width: 40px;
  height: 40px;
  background: #c01f21;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero h1 {
  position: absolute;
  white-space: nowrap;
  z-index: 9;
  font-size: 3.5rem;
  text-shadow: -1px 1px 1px rgba(0, 0, 0, 1);
  color: #fdfdfd;
}
.greeting {
  white-space: nowrap;
  z-index: 9;
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: #fdfdfd;
}

@media (min-width: 678px) {
  .hero {
    background-position: center;
  }
  .hero-circle {
    height: 300px;
    width: 300px;
  }
  .hero-link {
    bottom: 5%;
  }

  #hero-header {
    font-size: 5rem;
  }
}
</style>
