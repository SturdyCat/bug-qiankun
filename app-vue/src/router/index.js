import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  // eslint-disable-next-line no-underscore-dangle
  base: window.__POWERED_BY_QIANKUN__ ? '/web/app-vue/' : '/proxy-vue/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
