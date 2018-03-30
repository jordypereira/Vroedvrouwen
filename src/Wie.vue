<template>
  <div class="container">
    <app-header></app-header>
    <img src="./assets/images/duo.jpg" alt="Picture of a Liesa and Marieke" class="img-fluid">
    <main>
      <h2>Wie zijn we?</h2>
      <img src="./assets/images/liesa.jpg" alt="Liesa De Breucker" class="profileImage img-fluid float-right">
      <h3>Liesa De Breucker</h3>
      <p>In juni 2016 studeerde ik af als vroedvrouw aan de Odisee hogeschool te Sint-Niklaas. De opleiding gaf me veel leerrijke momenten, waaronder de stage-ervaring in Afrika het toppunt was. Mijn zelfstandigheid heeft hier een enorme boost door gekregen.</p>
      <p>Daarnaast was de uiteindelijke Bachelorproef een heel belangrijke topic van de opleiding. Mijn interesse gebied bevindt zich in de fasciatherapie ( = een vernieuwende behandelings- en begeleidingsvorm voor pijn bewegings- en functioneringsstoornissen van zowel fysieke en/of psychische aard). Ik stelde mezelf de vraag of fasciatherapie een effect kon hebben op huilbaby’s. Deze vraag bracht me bij Feron Ann en Sercu Paul, die me begeleid hebben doorheen dit werk. Het heeft me nieuwe inzichten bezorgt die ik mee wil nemen in de zelfstandige praktijk.</p>
      <p>Direct na mijn studies ben ik beginnen werken als vroedvrouw in AZ Nikolaas, waar ik ondertussen mijn ervaring heb vergroot.</p>
      <p>In 2017 ben ik van start gegaan als verpleegkundige bij het wit-gele kruis.</p>
      <p>Tot slot is het mijn ultieme droom/doel om als zelfstandig vroedvrouw dichter bij de gezinnen te staan om hen optimaal te kunnen begeleiden. Ik hou van een persoonlijke, warme en vooral natuurlijke aanpak, waardoor iedereen zich op zijn gemak voelt.</p>
      <p>Zelfstandig vroedvrouw en verpleegkundige aan huis is voor mij een perfecte combinatie.</p>
      <img src="./assets/images/marieke.jpg" alt="Marieke Verhulst" class="profileImage img-fluid float-right">
      <h3>Marieke Verhulst</h3>
      <p>Net als Liesa studeerde ik in juni 2016 af als vroedvrouw aan de Odisee Hogeschool te Sint-Niklaas. Tijdens de opleiding heb ik ongelofelijk mooie, leerrijke en soms ontroerende momenten mogen meemaken. Want dat is het beroep van een vroedvrouw nu eenmaal, een rollercoster van emoties waar we de ouders maar al te graag in bijstaan.</p>
      <p>In mijn laatste jaar ben ik gedurende drie maanden op Erasmusstage geweest in het CHA-ziekenhuis te Portimão, Portugal. Daar stond ik te werk op het verloskwartier, en dit was echt wel volledig mijn ding. Opname en begeleiding van de zwangere dame, de bevalling leiden, de eerste zorgen voor de pasgeboren baby, de postpartumzorgen,…</p>
      <p>Ik heb na de opleiding Vroedkunde ook nog een extra opleiding Verpleegkunde gestudeerd. En sinds 2017 ben ik dan ook aan het werk als zelfstandig thuisverpleegkundige bij VZW Verpleging aan Huis.</p>
      <p>Maar telkens als ik een zwangere vrouw zag, of wanneer oud-klasgenoten uit de opleiding Vroedkunde over hun werkervaringen vertelde, begon het toch weer ongelooflijk te kriebelen om als vroedvrouw te gaan werken. Vandaar nu ook de start als zelfstandig Vroedvrouw.</p>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/TheHeader';
import TheFooter from './components/TheFooter';

export default {
  name: 'Wie',
  components: {
    'app-header': Header,
    'app-footer': TheFooter,
  },
};
</script>

<style>
.profileImage {
  width: 183px;
  margin-left: 1.6em;
}
</style>
