<template>
  <div class="container">
    <app-header></app-header>
    <img src="./assets/images/buik-bloem-breed.jpg" alt="Picture of a belly" class="img-fluid">
    <main>
      <div id="content">
        <h2>
          <em><strong>Welkom aan alle toekomstige ouders!</strong></em>
        </h2>
        <p v-for="(p, i) in content" v-html="p" :key="i"></p>
      </div>
      <pagecards :cards="cards"></pagecards>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/TheHeader';
import TheFooter from './components/TheFooter';
import PageCards from './components/PageCards';

export default {
  name: 'HomePage',
  components: {
    'app-header': Header,
    'app-footer': TheFooter,
    pagecards: PageCards,
  },
  data() {
    return {
      cards: [
        {
          title: '- Wie zijn we? -',
          // eslint-disable-next-line
          img: require('./assets/images/duo-cropped.jpg'),
          imgInfo: 'Picture of Liesa and Marieke',
          text:
            'Liesa De Breucker In juni 2016 studeerde ik af als vroedvrouw aan de Odisee hogeschool te Sint-Niklaas. De opleiding gaf me veel leerrijke momenten, waaronder de stage-ervaring in Afrika het toppunt was. Mijn zelfstandigheid heeft hier een enorme boost door gekregen. Daarnaast was de uiteindelijke Bachelorproef een heel belangrijke topic van de opleiding. Mijn interesse…',
          link: '/wie',
        },
        {
          title: '- Wat doen we? -',
          // eslint-disable-next-line
          img: require('./assets/images/buik-bel-cropped.jpg'),
          imgInfo: 'Picture of a belly',
          text:
            'Van bij het begin van uw zwangerschap staan wij u bij voor een optimale opvolging. Er wordt een zwangerschapsdossier opgemaakt en de opvolging bestaat uit een persoonlijke aanpak. Wij staan ter jullie beschikking 24/24 en 7/7 voor een optimale begeleiding en voor het beantwoorden van jullie vragen. Wij bieden u: Prenatale consultaties (individueel) + GVO:…',
          link: '/wat',
        },
        {
          title: '- Contact -',
          // eslint-disable-next-line
          img: require('./assets/images/buik-bel-zw-cropped.jpg'),
          imgInfo: 'Picture of a belly in black and white',
          text:
            'Regio? Nieuwkerken, Groot-Beveren, Kruibeke, Linkeroever,  Zwijndrecht en Burcht. U kan ons 24/24 en 7/7 telefonisch bereiken. Liesa: +32 472/66.50.53 Marieke: +32 476/58.55.50',
          link: '/contact',
        },
      ],
      content: [
        'Het beroep “vroedvrouw” is een eeuwen oud beroep dat zich bezig houdt met het begeleiden van de normale, ongecompliceerde zwangerschap en bevalling. Dit volgens het principe: ‘natuur als het kan, techniek als het moet’. Bij mogelijke complicaties wordt er meteen doorverwezen naar een gynaecoloog.',
        'Elk zwangerschapsverhaal<span style="color:#000000;"> </span>is een unieke, wonderbaarlijke en aangrijpende gebeurtenis in het leven. Het is daarom van groot belang dat er deskundige en professionele zorg aanwezig is.',
        '<em>‘De vroedvrouw is er voor jou op eender welk moment tijdens de zwangerschap, bevalling en kraamperiode. Met al haar aandacht en deskundigheid staat zij jou bij om naar jou te luisteren, bij te staan, raad te geven, op te volgen en aan te moedigen.’</em>',
        'Om je zwangerschap bewust en positief te beleven kan je deze periode samen met ons op weg gaan. Je hebt recht op 12 terugbetaalde prenatale consultaties (individueel).',
        'Op het einde van je zwangerschap kunnen wij je bijstaan tijdens de arbeid zodat je deze periode kan beleven in een huiselijke en ontspannen sfeer.',
        'Bij de thuiskomst staan wij voor je klaar voor de postnatale zorg. Wij komen bij je thuis langs om je bij te staan in de zorg voor je kindje en voor jezelf. Je hebt recht op 10 terugbetaalde consultaties (of meer op voorschrift).',
      ],
    };
  },
};
</script>

<style>
#content {
  padding: 3.2em 0;
}
#content h2 {
  color: var(--blue);
}
#content p {
  margin-bottom: 1.6em;
}
</style>
