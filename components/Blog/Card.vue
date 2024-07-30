<script lang="ts" setup>
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const props = defineProps<{
  image?: string;
  title: string;
  excerpt?: string;
  slug: string;
}>();

const truncateWords = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;

  let truncated = text.slice(0, text.lastIndexOf(' ', maxLength));

  if (truncated.endsWith(',')) {
    truncated = truncated.slice(0, -1);
  }

  return truncated + '…';
};

const truncatedExcerpt = computed(() => {
  return props.excerpt ? truncateWords(props.excerpt, 100) : '';
});

const truncatedTitle = computed(() => {
  return props.title ? truncateWords(props.title, 30) : '';
});
</script>

<template>
  <NuxtLink :to="`/${slug}`" class="col-span-1 shadow-lg shadow-gray-600 card">
    <div class="relative w-full h-[200px]">
      <img
        v-if="image"
        :src="image"
        alt="Blog thumbnail"
        class="absolute object-cover w-full h-full" />
    </div>
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-3">
        {{ truncatedTitle }}
      </h3>
      <div v-if="excerpt" v-html="truncatedExcerpt" class="text-sm mb-3"></div>
      <NuxtLink
        :to="`/${slug}`"
        class="text-xs flex items-center gap-2 card-link"
        >Read more
        <div class="icon-link">
          <font-awesome :icon="faArrowRightLong" class="text-lg card-icon" />
        </div>
      </NuxtLink>
    </div>
  </NuxtLink>
</template>

<style>
.card-link {
  position: relative;
  width: 100px;
}
.card-icon {
  transition: 0.2s ease-in-out;
}
.icon-link::after {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--primary-color);
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(150%, -50%);
}

.card-link:hover .card-icon {
  margin-left: 10px;
}
</style>
