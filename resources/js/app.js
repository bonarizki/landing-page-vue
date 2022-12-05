/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Carousel3d from 'vue-carousel-3d';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { ValidationProvider,ValidationObserver } from 'vee-validate';





// vue router
import VueRouter from 'vue-router'






import Home from './components/Home/Home'
import Login from './components/Login'
import Register from './components/Register/Register'

const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: "/login",
        name: 'login',
        component: Login,
        beforeEnter(to, from, next) {
          window.location.href = "https://chatpanel.jasnita.co.id/login";
        }
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
    ],
  })


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app', require('./components/App.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(Carousel3d);

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);


Vue.use(VueTelInput);

const app = new Vue({
    el: '#app',
    router,
    vuetify : new Vuetify(),
});
