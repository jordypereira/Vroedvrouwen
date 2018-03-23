<template>
  <header>
    <hero></hero>
  </header>
</template>

<script>
import Hero from './Hero';

export default {
  name: 'Header',
  components: {
    hero: Hero,
  },
};
</script>

<style scoped>
</style>
