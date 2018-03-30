<template>
  <div class="outer">
    <div class="inner" v-for="(card, i) in cards" :key="i">
      <h5>{{ card.title }}</h5>
      <img :src="card.img" :alt="card.imgInfo" class="img-fluid">
      <p>{{ card.text }} <router-link :to="card.link"> Lees verder</router-link></p>
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
  min-width: 300px;
}
img {
  padding: 10px 0;
}
@media screen and (min-width: 768px) {
  .inner {
    flex-basis: 30%;
  }
}
h5 {
  text-align: center;
}
</style>
