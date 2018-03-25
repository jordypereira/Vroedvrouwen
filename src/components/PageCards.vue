<template>
  <div class="outer">
    <div class="inner" v-for="(card, i) in cards" :key="i">
      <h3>{{ card.title }}</h3>
      <img :src="card.img" :alt="card.imgInfo" class="img-fluid">
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
.outer {
  display: flex;
  flex-flow: row wrap;
}
.inner {
  display: flex;
  flex-grow: 1;
  flex-basis: 100%;
  flex-flow: column nowrap;
  padding: 0px 15px;
}
@media screen and (min-width: 768px) {
  .inner {
    flex-basis: 30%;
  }
}
h3 {
  text-align: center;
}
</style>
