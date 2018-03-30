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
      <li>Postnatale consultaties:  na de bevalling komen we langs om de gezondheid van jou en je kindje te garanderen. Hierbij worden alle belangrijke parameters gecontroleerd (bloeddruk, baarmoeder, T°…) en wordt de baby gewogen. Verder bieden wij hulp en begeleiding van de borst- en flesvoeding.</li>
      <li>Borstvoedingsbegeleiding aan huis!</li>
      </ul>
      <img src="./assets/images/buik-meet.jpg" alt="Picture of a Belly" class="img-fluid">
      <p>Voor alle gewenste zorgen komen wij bij u thuis.</p>
      <p>Bij het optreden van vragen of complicaties wordt de raad en hulp van derden (gynaecoloog, kinesist, kinderarts,…) gevraagd. Dit zorgt voor een goede multidisciplinaire zorgverlening.</p>
      <div class="row">
        <div class="col-sm">
          <img src="./assets/images/baby-weegschaal.jpg" alt="Baby laying on a scale" class="img-fluid">
        </div>
        <div class="col-sm">
          <img src="./assets/images/buik-bloem-small.jpg" alt="Picture of a Belly with a flower" style="width: 230px;" class="img-fluid">
        </div>
        <div class="col-sm">
          <img src="./assets/images/baby-voeten.jpg" alt="Baby feet" class="img-fluid">
        </div>
      </div>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default {
  name: 'Wat',
  components: {
    'app-header': Header,
    'app-footer': TheFooter,
  },
};
</script>

<style>

</style>
