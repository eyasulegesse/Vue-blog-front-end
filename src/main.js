import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home.vue';
import NewsManagement from './pages/NewsManagement.vue';
import NewsCategory from './pages/NewsCategory.vue';
import NewsDetail from './components/news/NewsDetail.vue';
import { createRouter, createWebHistory } from 'vue-router';
// import {creatP} frpm 'pin'
const routes = [
  { path: '/', component: Home },
  { path: '/news/:cat', component: NewsCategory, props: true },
  { path: '/detail/:id', name: '/detail', component: NewsDetail, props: true },
  { path: '/newsManagement', component: NewsManagement },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
