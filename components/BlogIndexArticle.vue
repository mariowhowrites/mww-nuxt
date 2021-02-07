<template>
  <article class="flex flex-col overflow-hidden">
    <div class="flex-shrink-0">
      <img
        class="h-48 w-full object-cover"
        :src="article.cover_image"
        :alt="article.title"
      />
    </div>
    <div class="flex-1 py-6 flex flex-col justify-between">
      <div class="flex-1 flex flex-col">
        <a href="#" class="block my-2">
          <h2 class="text-xl font-semibold font-heading text-white">
            {{ article.title }}
          </h2>
        </a>
        <p
          class="text-sm font-medium text-white self-start bg-indigo-600 rounded-lg px-2"
        >
          <a href="#" class="hover:underline font-heading">
            {{ article.category }}
          </a>
        </p>
        <p class="mt-3 text-base font-body text-gray-500">
          {{ article.description }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>
