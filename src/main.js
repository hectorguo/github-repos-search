import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

// router config
const router = new VueRouter({
  routes: [
    { path: '/', component: resolve => require(['./components/Home.vue'], resolve)},
    { name: 'repos', path: '/repos', component: resolve => require(['./components/RepoList.vue'], resolve) },
    { name: 'issues', path: '/repos/:owner/:repo', component: resolve => require(['./components/IssueList.vue'], resolve) },
    { path: '*', component: resolve => require(['./components/PageNotFound.vue'], resolve) }
  ]
});

// init app
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});