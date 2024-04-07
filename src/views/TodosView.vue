<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TodosView',

  data() {
    return {
      todos: [],
      pageSize: 10,
      currentPage: 1,
    }
  },

  computed: {
    totalPages() {
      return Math.ceil(this.todos.length / this.pageSize)
    },
  },

  methods: {
    async fetchTodos(page, perPage) {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
          {
            params: {
              _page: page,
              _per_page: perPage,
            },
          }
        )
        this.todos = response.data
      } catch {
        console.error('Error fetching data')
      }
    },
  },
}
</script>
