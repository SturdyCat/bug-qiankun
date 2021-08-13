// https://umijs.org/config/
import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: false,
  dva: false,
  layout: {
    locale: false,
    siderWidth: 208,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: true,
  },
  targets: {
    ie: 11,
  },
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy,
  routes,
  manifest: {
    basePath: '/',
  },
  fastRefresh: {},
  exportStatic: {},
  mfsu: {},
  webpack5: {
    // lazyCompilation: {},
  },
  base: '/web/',
  headScripts: [
    { src: '/proxy-zeppelin/zone.umd.min.js' },
  ],
});
