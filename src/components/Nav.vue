<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <!-- eslint-disable-next-line -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Vroedvrouw!</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Wie zijn we?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Wat doen we?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
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
}
</style>

