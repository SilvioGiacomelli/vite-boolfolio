import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Errore404 from './pages/Errore404';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'errore404',
      component: Errore404
    }
  ]
})

export {router};