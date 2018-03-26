<template>
  <div class="container">
    <app-header></app-header>
    <img src="./assets/images/buik-bel.jpg" alt="Picture of a Liesa and Marieke" class="img-fluid">
    <main>
      <h2>
        Wat doen we?
      </h2>
      <p>Van bij het begin van uw zwangerschap staan wij u bij voor een optimale opvolging. Er wordt een zwangerschapsdossier opgemaakt en de opvolging bestaat uit een persoonlijke aanpak.</p>
      <p>Wij staan ter jullie beschikking 24/24 en 7/7 voor een optimale begeleiding en voor het beantwoorden van jullie vragen.</p>
      <p><em>Wij bieden u:</em></p>
      <ul>
      <li>Prenatale consultaties (individueel) + GVO: om jullie voor te bereiden op de komst van jullie kindje en alle nodige parameters tijdens de zwangerschap op te volgen.</li>
      <li>Begeleiding arbeid thuis.</li>
      <li>Postnatale consultaties:  na de bevalling komen we langs om de gezondheid van jou en je kindje te garanderen. Hierbij worden alle belangrijke parameters gecontroleerd (bloeddruk, baarmoeder, T°…) en wordt de baby gewogen. Verder bieden wij hulp en begeleiding van de borst- en flesvoeding.</li>
      <li>Borstvoedingsbegeleiding aan huis!</li>
      </ul>
      <img src="./assets/images/buik-meet.jpg" alt="Picture of a Belly" class="img-fluid">
      <p>Voor alle gewenste zorgen komt de vroedvrouw bij u thuis.</p>
      <p>Bij het optreden van vragen of complicaties wordt de raad en hulp van derden (gynaecoloog, kinesist, kinderarts,…) gevraagd. Dit zorgt voor een goede multidisciplinaire zorgverlening.</p>
      <div class="row">
        <div class="col-sm">
          <img src="./assets/images/baby-weegschaal.jpg" alt="Baby laying on a scale">
        </div>
        <div class="col-sm">
          <img src="./assets/images/buik-bloem-small.jpg" alt="Picture of a Belly with a flower" style="width: 230px;">
        </div>
        <div class="col-sm">
          <img src="./assets/images/baby-voeten.jpg" alt="Baby feet">
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'Wat',
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
.row {
  max-width: 100%;
}
@media screen and (min-width: 768px) {
  main {
    padding: 20px 40px;
  }
}
</style>
