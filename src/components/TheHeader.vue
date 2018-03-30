<template>
  <header>
    <hero></hero>
    <app-nav></app-nav>
  </header>
</template>

<script>
import Hero from './Hero';
import Nav from './Nav';

export default {
  name: 'Header',
  components: {
    hero: Hero,
    'app-nav': Nav,
  },
};
</script>

<style scoped>

</style>
