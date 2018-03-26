<template>
  <div id="hero">
    <img src="../assets/images/logo.png" alt="Logo Vroedvrouwen">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      msg: '- Vroedvrouw aan huis Liesa en Marieke -',
    };
  },
};
</script>

<style scoped>
div {
  text-align: center;
  background-color: #fff;
  padding: 2.4em 0;
}
img {
  max-height: 150px;
  max-width: 100%;
}
p {
  padding: 15px;
  font-size: 18px;
  color: #a8a6a1;
  margin: 0;
}
</style>
