<template>
  <footer>
    <p>{{ msg }}<a :href="url" target="_blank" rel="noopener">{{ designer }}</a></p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Designed by ',
      url: 'http://multi-servicejp.be',
      designer: 'Multi-Service JP',
    };
  },
};
</script>

<style>
footer p {
  text-align: center;
  color: #222;
}
footer a {
  text-decoration: none;
  color: #222;
}
</style>
