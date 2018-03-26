<template>
  <div class="container">
    <app-header></app-header>
    <img src="./assets/images/buik-bel-zw.jpg" alt="Picture of a Liesa and Marieke" class="img-fluid">
    <main>
      <h2>
        Contact
      </h2>
      <p><em><strong>Regio?</strong></em></p>
      <p>Nieuwkerken, Groot-Beveren, Kruibeke, Linkeroever,  Zwijndrecht en Burcht.</p>
      <p>U kan ons 24/24 en 7/7 telefonisch bereiken.</p>
      <p>Liesa: +32 472/66.50.53</p>
      <p>Marieke: +32 476/58.55.50</p>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'Contact',
  components: {
    'app-header': Header,
    'app-footer': Footer,
  },
};
</script>

<style scoped>
main {
  background-color: #fff;
  padding: 20px 10px;
  color: var(--lightgray);
}
p {
  margin-bottom: 1.6em;
}
a {
  text-decoration: none;
  color: var(--blue);
}
.profileImage {
  width: 183px;
  margin-left: 1.6em;
}
@media screen and (min-width: 768px) {
  main {
    padding: 20px 40px;
  }
}
</style>
