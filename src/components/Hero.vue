<template>
  <div id="hero">
    <router-link to="/">
      <img src="../assets/images/logo.png" alt="Logo Vroedvrouwen">
      <p>{{ msg }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      msg:
        '- Nieuwkerken, Groot-Beveren, Zwijndrecht, Linkderoever, Burcht en Kruibeke -',
    };
  },
};
</script>

<style>
#hero {
  text-align: center;
  background-color: #fff;
  padding: 2.4em 0;
}
#hero a img {
  max-height: 150px;
  max-width: 100%;
}
#hero a p {
  padding: 15px;
  font-size: 18px;
  color: #a8a6a1;
  margin: 0;
}
#hero a {
  text-decoration: none;
}
</style>
