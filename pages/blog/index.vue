<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="relative bg-gray-800 min-h-screen pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="text-3xl tracking-tight font-extrabold font-heading text-white sm:text-4xl"
        >
          MarioWhoWrites
        </h2>
        <p
          class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 font-body"
        >
          Words about various subjects.
        </p>
      </div>
      <aside id="CategorySelect" class="max-w-lg mx-auto mt-8 mb-12 flex">
        <BlogIndexCategoryButton
          v-for="category in categories"
          :key="category"
          :category="category"
          :selected-category="selectedCategory"
          @select-category="selectCategory"
        />
      </aside>
      <div class="mt-12 max-w-lg mx-auto flex flex-col">
        <BlogIndexArticle
          v-for="article in filteredArticles"
          :key="article.title"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCategory: null,
      articles: [
        {
          cover_image:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          category: 'Tech',
          title: 'Boost your conversion rate',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.`,
        },
        {
          cover_image:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          category: 'Culture',
          title: 'Boost your conversion rate',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.`,
        },
        {
          cover_image:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
          category: 'Politics',
          title: 'Boost your conversion rate',
          description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto accusantium praesentium eius, ut atque fuga culpa,
                  similique sequi cum eos quis dolorum.`,
        },
      ],
    }
  },

  computed: {
    categories() {
      return this.articles.map(({ category }) => category)
    },

    filteredArticles() {
      if (this.selectedCategory === null) {
        return this.articles
      }

      return this.articles.filter(
        ({ category }) => category === this.selectedCategory
      )
    },
  },

  methods: {
    selectCategory(category) {
      if (this.selectedCategory === category) {
        this.selectedCategory = null
        return
      }

      this.selectedCategory = category
    },
  },
}
</script>
