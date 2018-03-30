import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/Homepage';
import Wie from '@/Wie';
import Wat from '@/Wat';
import Contact from '@/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
      meta: {
        title: 'Vroedvrouwen aan huis Liesa & Marieke',
      },
    },
    {
      path: '/wie',
      name: 'Wie',
      component: Wie,
      meta: {
        title: 'Wie is wie? - Vroedvrouwen aan huis Liesa & Marieke',
      },
    },
    {
      path: '/wat',
      name: 'Wat',
      component: Wat,
      meta: {
        title: 'Wat doen we? - Vroedvrouwen aan huis Liesa & Marieke',
      },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {
        title: 'Contact - Vroedvrouwen aan huis Liesa & Marieke',
      },
    },
  ],
  mode: 'history',
});
