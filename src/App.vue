<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400');
:root {
  --lightblue: #def6fc;
  --bg-color: var(--lightblue);
  --lightgray: #444340;
  --blue: #3da7db;
}
body {
  font-family: Source Sans pro, Helvetica, sans-serif;
  background-color: var(--bg-color);
  font-size: 16px;
  font-weight: 300;
}
p {
  font-size: 1.1rem;
}

@media (min-width: 576px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1180px;
  }
}
</style>
