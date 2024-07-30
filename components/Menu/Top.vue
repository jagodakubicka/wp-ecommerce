<script lang="ts" setup></script>

<template>
  <nav class="bg-transparent text-white py-5 fixed z-50 w-full">
    <div class="container flex justify-between align-center">
      <NuxtLink to="/" class="logo text-xl font-bold">JJ</NuxtLink>
      <ul class="inline-flex gap-4">
        <li class="font-bold">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="font-bold">
          <NuxtLink to="/categories">Categories</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style>
nav {
  border-image: fill 1
    linear-gradient(180deg, rgba(29, 29, 29, 1) 0%, rgba(48, 48, 87, 0) 90%);
}
.logo {
  position: relative;
  padding: 0 0.8rem;
}
.logo::after {
  content: '';
  display: inline;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-color);
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
