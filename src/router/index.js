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
    },
    {
      path: '/wie',
      name: 'Wie',
      component: Wie,
    },
    {
      path: '/wat',
      name: 'Wat',
      component: Wat,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
  mode: 'history',
});
