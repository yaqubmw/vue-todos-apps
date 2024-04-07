<template>
  <nav>
    <div class="navbar">
      <router-link class="button" to="/" active-class="active">
        Home
      </router-link>
      <router-link class="button" to="/todos" active-class="active">
        To-Do List
      </router-link>
      <router-link class="button" to="/add" active-class="active">
        Add To-Do
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="postcss">
.navbar {
  @apply flex justify-center items-center gap-4 py-2 px-2 mt-12;
}
.button {
  @apply rounded-md text-lg font-medium p-2 hover:text-indigo-800 transition-all duration-300;
}
.active {
  @apply bg-indigo-900 text-white hover:text-gray-100 transition-all duration-300;
}
</style>
