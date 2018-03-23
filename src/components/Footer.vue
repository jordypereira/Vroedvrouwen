<template>
  <footer>
    <p>{{ msg }}<a :href="url" target="_blank">{{ designer }}</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      msg: 'Designed by ',
      url: 'multi-servicejp.be',
      designer: 'Multi-Service JP',
    };
  },
};
</script>

<style scoped>
p{
  text-align: center;
  color: #222;
}
a{
  text-decoration: none;
  color: #222;
}
</style>
