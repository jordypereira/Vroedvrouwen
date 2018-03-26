<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <!-- eslint-disable-next-line -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> Menu
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" exact>Vroedvrouw!</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/wie" exact>Wie zijn we?</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/wat" exact>Wat doen we?</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact" exact>Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};

/* var url = window.location;
$('ul.nav a[href="' + url + '"]')
  .parent()
  .addClass('active');
$('ul.nav a')
  .filter(function() {
    return this.href === url;
  })
  .parent()
  .addClass('active'); */
</script>

<style scoped>
#navbar {
  justify-content: center;
  font-size: 1.2rem;
}
.navbar {
  justify-content: center;
}
</style>

