import Vue from 'vue';
import Router from 'vue-router';
import {
  Home,
  About,
  Login,
  Signup,
  Profile,
} from '../views';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

export default router;
