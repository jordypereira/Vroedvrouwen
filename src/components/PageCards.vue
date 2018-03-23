<template>
  <div class="cards">
    <div class="card" v-for="(card, i) in cards" :key="i">
      <h3>{{ card.title }}</h3>
      <img :src="card.img" :alt="card.imgInfo">
      <p>{{ card.text }} <a :href="card.link">Lees verder...</a></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.cards{
  display: flex;
  flex-flow: row wrap;
}
.card{
  display: flex;
  flex-grow: 1;
  flex-basis: 30%;
  flex-flow: column nowrap;
  padding: 0px 15px;
}
h3{
  text-align: center;
}
img{
  max-width: 500px;
}
</style>
