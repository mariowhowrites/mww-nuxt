<template>
  <button
    :class="buttonClassObject"
    @click="$emit('select-category', category)"
  >
    {{ category }}
  </button>
</template>

<script>
export default {
  props: {
    selectedCategory: {
      type: String,
      default: '',
    },

    category: {
      type: String,
      required: true,
    },
  },

  computed: {
    isSelected() {
      return this.selectedCategory === this.category
    },

    buttonClassObject() {
      const categoryColorMap = {
        tech: 'red',
        politics: 'green',
        culture: 'blue',
      }

      let color = 'green'
      if (Object.keys(categoryColorMap).includes(this.category.toLowerCase())) {
        color = categoryColorMap[this.category.toLowerCase()]
      }

      const nonselectedClasses = `bg-${color}-900 text-${color}-400 hover:bg-${color}-700 hover:text-white border-${color}-400`
      let selectedClasses = `bg-${color}-400 text-white border-${color}-400`
      if (color === 'red') {
        selectedClasses = `bg-${color}-600 text-white border-${color}-400`
      }

      const classObject = {
        'border mr-6 shadow-xl text-3xl px-4 rounded-sm': true,
      }

      classObject[nonselectedClasses] = !this.isSelected
      classObject[selectedClasses] = this.isSelected

      return classObject
    },
  },
}
</script>
