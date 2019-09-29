import Vue from 'vue';
import VueRouter from 'vue-router';


import HomeWorld from './src/components/HelloWorld.vue';
import About from './src/components/About.vue';
import Features from './src/components/Features.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomeWorld },
    { path: '/about', component: About },
    { path: '/features', component: Features }
];

export const router = new VueRouter({
    routes
})